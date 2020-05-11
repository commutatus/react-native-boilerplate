# React Native Awesome Boilerplate

__List of integrations out of the box__
- [x] React native 0.61.5
- [x] React native navigation by WIX
- [x] Redux
- [x] Redux thunk
- [x] Redux persist
- [x] Redux logger
- [x] V8 JS engine
- [x] GraphQL
- [x] Travis
- [x] Environment variables setup

__Social login__
- [x] Facebook
- [x] Google

__Usage__

After cloning and npm install please follow the steps below, later env file and variable names can be changed and this boilerplate is completely customizable.

#### Step 1 : Run command `rm -rf .git` this is basically to remove git from the project and the boilerplate can be reinitialized to required origin or repo.
#### Step 2 :Install `npm install react-native-rename -g` and run  `react-native-rename newName` this helps to rename build artifact and app name. more info check this [link](https://www.npmjs.com/package/react-native-rename).
#### Step 3 : Create `staging.env` and `prod.env` at `/env` folder.
#### Step 4 : run `./run.sh`  at root.
-  This is a custom script to select env and build type
-  We can also select env directly by running `./run.sh staging`

__Social Login__

### FOR FACEBOOK

#### Step 1 : Create a facebook app [link](https://www.facebook.com/login/?next=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Freact-native%2Fgetting-started)
#### Step 2 : After creating app follow [link](https://developers.facebook.com/quickstarts) select platform (Android or iOS)
#### Step 3 : Follow the steps listed. 


### FOR GOOGLE

#### Step 1 : Create a Google app [link](https://github.com/react-native-community/react-native-google-signin/blob/master/docs/get-config-file.md)

### MAKING A RELEASE BUILD

#### Update : To make a release build run the following command from the project root directory `cd android && ./gradlew app:assembleRelease`. You can use `app:bundleRelease` to create a `.AAB` file.
 
__That's it 🎉__

__Upcoming features__
- [ ] Microsoft Appcenter
- [ ] Codepush
- [ ] Firebase
- [ ] Instabug
- [ ] Smartlook

Enjoy coding and feel free to give feedbacks.
