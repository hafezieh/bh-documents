#!/bin/bash
echo
echo
echo "[*]WRITTEN BY AH GHorab"
echo "[*]11/13/2016"
echo
echo

# $1 ---> WebApplication workspace Folder Name (like accounting)
# $2 ---> WebApplication target Folder Name (like accounting)
# $3 ---> WebApplication deploy Folder Name & docker_$3 (like accounting & docker_accounting)

########################################################################
#ACCOUNTING
#workspace Folder Name=accounting
#target Folder Name=accounting
#deploy Folder Name=accounting
#+++++++++++++++++++++++++++++++++++
#HRM
#workspace Folder Name=hrm-all
#target Folder Name=hrm-all
#deploy Folder Name=hrmall
#+++++++++++++++++++++++++++++++++++
#UniVersity
#workspace Folder Name=university-testing-system
#target Folder Name=university-testing-system
#deploy Folder Name=university-testing-system
#+++++++++++++++++++++++++++++++++++
#AMAD
#workspace Folder Name=amad-all
#target Folder Name=amadProject
#deploy Folder Name=amadProject
#+++++++++++++++++++++++++++++++++++
#ValiFaghih
#workspace Folder Name=valifaghihProject
#target Folder Name=valifaghihProject
#deploy Folder Name=valifaghihProject
#+++++++++++++++++++++++++++++++++++
#AWE
#workspace Folder Name=ammunitionWeapon
#target Folder Name=ammunitionWeapon
#deploy Folder Name=ammunitionWeapon
#+++++++++++++++++++++++++++++++++++
#Bazresi
#workspace Folder Name=xxxx
#target Folder Name=xxxx
#deploy Folder Name=xxxx
#+++++++++++++++++++++++++++++++++++
#CAL
#workspace Folder Name=calendar
#target Folder Name=calendar
#deploy Folder Name=calendar
#+++++++++++++++++++++++++++++++++++
#Mersad_vfg
#workspace Folder Name="evaluation -mersad"
#target Folder Name=evaluation
#deploy Folder Name=evaluation
#+++++++++++++++++++++++++++++++++++
#Message
#workspace Folder Name=xxxx
#target Folder Name=xxxx
#deploy Folder Name=xxxx
#+++++++++++++++++++++++++++++++++++
#Shopping
#workspace Folder Name=shoppingOrganization
#target Folder Name=shoppingOrganization
#deploy Folder Name=shoppingOrganization
#+++++++++++++++++++++++++++++++++++
#Vaghef
#workspace Folder Name=vaghef
#target Folder Name=vaghef
#deploy Folder Name=vaghef
#+++++++++++++++++++++++++++++++++++
#Vefagh
#workspace Folder Name=xxxx
#target Folder Name=xxxx
#deploy Folder Name=xxxx
#+++++++++++++++++++++++++++++++++++
#Tarabari
#workspace Folder Name=tarabari
#target Folder Name=transportation
#deploy Folder Name=transportation
#+++++++++++++++++++++++++++++++++++
########################################################################

echo "######################################################"
echo "#                                                    #"
echo "#   CHECK IF  WEBAPP FOLDER IS HERE OT NOT           #"
echo "# 						   #"		                   
echo "######################################################"


#-------- CHECK IF "ACCOUNTING WEBAPP" IS HERE OT NOT --------#
echo ""
echo "[*]CHECK IF ACCOUNTING WEBAPP IS HERE OT NOT"
echo ""
cd "/root/jenkins_test/workspace/$1/target/"
temp=$(ls)
if echo $temp | grep -sw "$2" > /dev/null
then
echo "	-> Webapplication founded :)"
else 
echo "	-> There is no webapplication :("
exit 1
fi

#-------- COPYING ITEX AND CONFIG WEBLOGIC.XML AND WEB.XML --------------#
echo ""
echo "[*]COPYING ITEX AND CONFIG WEBLOGIC.XML AND WEB.XML"
echo ""
cp /DevOps/scripts/All-Application-Docker-Image-Builder/itext-4.2.0.jar "/root/jenkins_test/workspace/$1/target/$2/WEB-INF/lib"
cp -r /DevOps/scripts/All-Application-Docker-Image-Builder/app-scripts "/root/jenkins_test/workspace/$1/src/main/docker/"
#cd "/root/jenkins_test/workspace/$1/target/$2/WEB-INF/"
#rm web.xml 
#rm weblogic.xml
#cd /DevOps/scripts/All-Application-Docker-Image-Builder/
#cp web.xml "/root/jenkins_test/workspace/$1/target/$2/WEB-INF/"
#cp weblogic.xml "/root/jenkins_test/workspace/$1/target/$2/WEB-INF/"

cd "/root/jenkins_test/workspace/$1/target/"
cp -R "$2" "/root/jenkins_test/workspace/$1/src/main/docker/"

cd "/root/jenkins_test/workspace/$1/src/main/docker"

if [ "$2" = "$3" ] ;then
echo "[**]target Folder is equal to deploy Folder"
else
echo "[**]target Folder is NOT equal to deploy Folder"
mv "$2" "$3"
fi


echo "##########################################"
echo "#                                        #"
echo "#          CREAT NONDOCKER WEBAPP        #"
echo "#                                        #"
echo "##########################################"

echo "[*]DELETING OLD WEBAPP"

cd /run/media/root/Version/webapps-without-docker;
temp=$(ls)
if echo $temp | grep -sw "$3_old" > /dev/null
then
echo "	-> Old WebApps Founded"
echo
echo "     -> Deleting Old Webapps" 
rm -rf "$3_old";
fi

echo "[*]RENAME CURRENT WEBAPP TO OLD ONE"
temp=$(ls)
if echo $temp | grep -sw "$3" > /dev/null
then
echo "  -> Current WebApps Founded"
echo
echo "     -> RENAME IT TO OLD ONE"
mv "$3" "$3_old";
fi

echo "[*]Copy new Webapp to /DevOps/webapp Folder"

cd "/root/jenkins_test/workspace/$1/src/main/docker"
cp -R "$3" /run/media/root/Version/webapps-without-docker/


echo "##########################################"
echo "# 				       #"
echo "# 	      DOCKER IMAGES DELETE     #"
echo "# 				       #"
echo "##########################################"


#-------- CHECK IF THERE IS DOCKER  IMAGE OR NOT --------------#
echo ""
echo "[*]CHECK IF THERE IS DOCKER IMAGE OR NOT"
echo ""
temp=$(docker images)
if echo $temp | grep -sw "docker_$4" > /dev/null
then
docker rmi "docker_$4"
fi
echo "	-> done"


#-------- CHECK IF THERE IS DOCKER REPOSITORY IMAGE OR NOT --------------#
echo ""
echo "[*]CHECK IF THERE IS DOCKER REPOSITORY IMAGE OR NOT"
echo ""
temp=$(docker images)
if echo $temp | grep -sw "localhost:5043/docker_$4" > /dev/null
then
docker rmi "localhost:5043/docker_$4"
fi
echo "	-> done"


echo "##########################################"
echo "# 				       #"
echo "#   DOCKER FILE EXISTANCE CHECKING       #"
echo "# 				       #"
echo "##########################################"



#-------- CHECK IF THERE IS DOCKERFILE IN PATH OR NOT --------#
echo ""
echo "[*]CHECK IF THERE IS DOCKERFILE IN PATH OR NOT"
echo ""
temp=$(ls)
if echo $temp | grep -sw Dockerfile > /dev/null
then
echo "[*]DOCKER FILE DOUNDED"
else
echo "[*]NO DOCKER FOUNDED EXIT CODE 1"
exit 1
fi
echo "	-> done"


echo "##########################################"
echo "# 				       #"
echo "#          BUILD DOCKER IMAGE 	       #"
echo "# 				       #"
echo "##########################################"


#-------- BUILDING DOCKER IMAGE -----------------------------#
echo ""
echo "[*]BUILDING DOCKER IMAGE"
docker build --no-cache=true -t "docker_$4" .
echo "	-> done"


#-------- DELETE APP FROM DOCKER FOLDER -----------------------------#
echo ""
echo "[*]DELETE APP FROM DOCKER FOLDER"
rm -rf "$3"
rm -rf app-scripts 
echo "	-> done"


#------- TESTING PORPUSE UNCOMMENT IF U WANT ------------------#
#docker run -d --name accounting_container -p 8001:8001 docker_accounting_image
#docker ps -a 

echo "##############################################"
echo "# 				           #"
echo "# PUSHING DOCKER IMAGE TO PRIVATE REPOSITORY #"
echo "# 				           #"
echo "##############################################"


#------- PUSHING DOCKER IMAGE TO PRIVATE REPOSITORY -----------#
echo ""
echo "[*]PUSHING DOCKER IMAGE TO PRIVATE REPOSITORY"
echo ""

docker tag "docker_$4" "localhost:5043/docker_$4"
docker push "localhost:5043/docker_$4"
echo "	-> done"


echo
echo "---> Everything Ok :D !!! <---"
echo



