#!/bin/sh
get_and_set_env()
{
	while :
		do
			read -p "Choose one option: " type
			break
		done

	if [ "$type" = "2" ]; then
		echo "1. staging \n2. prod"
		while :
		do
		read -p "Select environment: " env
		case $env in 
				"1")
					gulp set --env=staging
					break
				;;
				"2")
					gulp set --env=prod
					break
				;;
				*)
					echo "Invalid selection."
			esac
		done

	else
		echo "1. Development \n2. Production in local"
		while :
		do
		read -p "Select env: " env
		case $env in 
				"1")
					gulp set --env=staging
					break
				;;
				"2")
					gulp set --env=prod
					break
				;;
				*)
					echo "Invalid selection."
			esac
		done
	fi
}

if [ "$TRAVIS" = "true" ]; then	
	type="2"
	if [ "$TRAVIS_BRANCH" = "staging" ]; then script here; fi
	if [ "$TRAVIS_BRANCH" = "beta" ]; then script here; fi
	if [ "$TRAVIS_BRANCH" = "master" ]; then script here; fi
	
else
	if [ $# != 0 ] 
	then
		type=1
		case $1 in 
				staging)
					gulp set --env=staging
					break
				;;
				prod)
					gulp set --env=prod
					break
				;;
				*)
					echo "command not found."
					exit
			esac
	else
		echo "1. Debug build\n2. Release build"
		get_and_set_env 
	fi
fi


if [ "$type" = "1" ]; then
	echo "processing debug build"
	react-native run-android
elif [ "$type" = "2" ]; then
	echo "processing release build"
	cd android && ./gradlew assemble
else
	echo "Not a valid command"
fi