#!/bin/bash
echo
echo
echo "[*]WRITTEN BY AMIRHOSSEIN GHORAB"
echo "[*]11/13/2016"
echo "[*]EDIT BY SAEED NOORI"
echo "[*]Mondey,December 04,2017"
echo
echo

# $1 ---> WebApplication deploy Folder Name & docker_$3 (like accounting & docker_accounting)
# $2 ---> WebApplication Port Number

########################################################################
#ACCOUNTING
#workspace Folder Name=accounting
#target Folder Name=accounting
#deploy Folder Name=accounting
#port Number=8111
#+++++++++++++++++++++++++++++++++++
#HRM
#workspace Folder Name=hrm-all
#target Folder Name=hrm-all
#deploy Folder Name=hrmall
#port Number=9090
#+++++++++++++++++++++++++++++++++++
#UniVersity
#workspace Folder Name=university-testing-system
#target Folder Name=university-testing-system
#deploy Folder Name=university-testing-system
#port Number=6060
#+++++++++++++++++++++++++++++++++++
#AMAD
#workspace Folder Name=amad-all
#target Folder Name=amadProject
#deploy Folder Name=amadProject
#port Number=9099
#+++++++++++++++++++++++++++++++++++
#ValiFaghih
#workspace Folder Name=valifaghihProject
#target Folder Name=valifaghihProject
#deploy Folder Name=valifaghihProject
#port Number=7777
#+++++++++++++++++++++++++++++++++++
#AWE
#workspace Folder Name=ammunitionWeapon
#target Folder Name=ammunitionWeapon
#deploy Folder Name=ammunitionWeapon
#port Number=8585
#+++++++++++++++++++++++++++++++++++
#Bazresi
#workspace Folder Name=xxxx
#target Folder Name=xxxx
#deploy Folder Name=xxxx
#port Number=9090
#+++++++++++++++++++++++++++++++++++
#CAL
#workspace Folder Name=calendar
#target Folder Name=calendar
#deploy Folder Name=calendar
#port Number=2323
#+++++++++++++++++++++++++++++++++++
#Mersad_vfg
#workspace Folder Name="evaluation -mersad"
#target Folder Name=evaluation
#deploy Folder Name=evaluation
#port Number=8000
#+++++++++++++++++++++++++++++++++++
#Message
#workspace Folder Name=xxxx
#target Folder Name=xxxx
#deploy Folder Name=xxxx
#port Number=xxx
#+++++++++++++++++++++++++++++++++++
#Shopping
#workspace Folder Name=shoppingOrganization
#target Folder Name=shoppingOrganization
#deploy Folder Name=shoppingOrganization
#port Number=9999
#+++++++++++++++++++++++++++++++++++
#Vaghef
#workspace Folder Name=vaghef
#target Folder Name=vaghef
#deploy Folder Name=vaghef
#port Number=9292
#+++++++++++++++++++++++++++++++++++
#Vefagh
#workspace Folder Name=xxxx
#target Folder Name=xxxx
#deploy Folder Name=xxxx
#port Number=2323
#+++++++++++++++++++++++++++++++++++
#Tarabari
#workspace Folder Name=tarabari
#target Folder Name=transportation
#deploy Folder Name=transportation
#port Number=5050
#+++++++++++++++++++++++++++++++++++
########################################################################



echo "#################################################"
echo "# 				              #"
echo "# CHECK IF Application CONTAINER IS UP OR NOT   #"
echo "# 				              #"
echo "#################################################"


#-------- CHECK IF ACCOUNTING CONTAINER IS UP OR NOT --------#
echo ""
echo "[*]CHECK IF APPLICATION CONTAINER IS UP OR NOT"
echo ""
ss=$(docker ps -a | grep -sw "tools:5043/docker_$1" | cut -d " " -f1)
if [ -z "$ss" ]; then

echo ""
echo "	-> NO CONTAINER IS UP"
echo ""
sleep 1

else

echo ""
echo "	-> CONTAINER IS UP"
echo ""
echo "	-> CONTAINER ID=$ss"
echo ""
echo ""
echo "	-> STOPPING CONTAINER $ss"
echo ""
sleep 2
docker stop $ss
echo "	-> REMOVING CONTAINER $ss"
echo ""
docker rm -f $ss
echo "	-> DONE"
echo ""
fi

echo "##########################################"
echo "# 				       #"
echo "# 	      DOCKER IMAGES DELETE     #"
echo "# 				       #"
echo "##########################################"


#-------- CHECK IF THERE IS DOCKER REPOSITORY IMAGE OR NOT --------------#
echo ""
echo "[*]CHECK IF THERE IS DOCKER REPOSITORY IMAGE OR NOT"
echo ""
temp=$(docker images)
if echo $temp | grep -sw "tools:5043/docker_$1" > /dev/null
then
docker rmi "tools:5043/docker_$1"
fi
echo "	-> done"

echo "##########################################"
echo "# 				       #"
echo "#     PULL NEW DOCKER IMAGE FROM REPO    #"
echo "# 				       #"
echo "##########################################"


#------- PUSHING DOCKER IMAGE TO PRIVATE REPOSITORY -----------#
echo ""
echo "[*]PILLING DOCKER IMAGE FROM PRIVATE REPOSITORY"
echo ""

docker pull "tools:5043/docker_$1"
echo "	-> done"


echo "##########################################"
echo "# 				       #"
echo "# 	    STSRT DOCKER CONTAINER     #"
echo "# 				       #"
echo "##########################################"


echo ""
echo "[*]STSRT DOCKER CONTAINER "
echo ""

if [ ! -z $4 ]
then
docker run -d -h 192.168.251.141 -e EUREKA_PORT=$3 -e EXPOSE_PORT=$2 --memory=$4g -v /etc/localtime:/etc/localtime:ro $5  --name "$1_container" -p $2:$3 "tools:5043/docker_$1"
else
docker run -d -h 191.168.251.141 -e EUREKA_PORT=$3 -e EXPOSE_PORT=$2 --memory=4g -v /etc/localtime:/etc/localtime:ro $5  --name "$1_container" -p $2:$3 "tools:5043/docker_$1"
fi
echo ""
echo ""
docker ps -a | grep -sw "tools:5043/docker_$1"
echo ""
echo ""


echo "##########################################"
echo "# 				       #"
echo "# 	Docker log enable              #"
echo "# 				       #"
echo "##########################################"

cd /DevOps/logs/
echo "" > $1.log

echo ""
echo "[*]CHECK XTERM PID "
echo "" 
screen -X -S $1 kill

echo ""
echo "[*]RUNNING XTERM "
echo "" 


screen -S $1 -d  -m /bin/bash -c "docker logs -f "$1_container" | tee $1.log"

echo ""
echo "[*]SAVING XTERM PID "
echo "" 
screen -list

echo
echo "---> Everything Ok !!! <---"
echo



