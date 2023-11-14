## System Requirements

**CPU:** Several sources recommend an Intel Core i5 or greater
**RAM:** On Windows, it is recommended to have at least 8 GB of RAM.
**Windows Version:** React Native runs on all Windows 11 Systems, and all Windows 10 Systems with Windows version 10.0.16299.0 or higher. Some features may not be available on Windows 10.

## Installation and Configuration

1) Install Node and JDK. Most modern versions of Android Studio do not require the external installation of JDK
2) Install Android Studio
	a) Ensure that that the Android SDK, Android SDK Platform and Android Virtual Device components are installed
3) Configure ANDROID_HOME Environment Variable
	a) Open Control Panel
	b) go to User Accounts, then User Accounts again
	c) go to Change my Environent Variables
	d) Go to New... To create a new ANDROID_HOME user variable that points to your Android SDK. This path can be found under Android Studio Settings > Languages & Frameworks > Android SDK
4) Add Platform Tools to PATH
	a) Return to Change my Environment Variables
	b) Select Path variable
	c) edit > new
	d) add %LOCALAPPDATA%\Android\Sdk\platform-tools

## Project Creation

It's suggested to create a folder for your React Native Projects, so you can find and work with them more easily. Do not place this folder in your OneDrive

1) Navigate to your folder in cmd and run the command "npx react-native@latest init [Project Name]" where [Project Name] is the name of your project

2) That's all!

### Changing to Javascript

If you want to change from using Typescrypt to Javascript:

1) Open app.tsx
2) Change its extension to .jsx
3) Erase any underlined code until it resembles javascript

## Running The Project

First, to run the app virtually, you need to start a virtual device. To do this: 
1) Open Android Studio, go to More Actions and then Device Manager. 
2) Create a new phone device, hit next.
3) You will be prompted to choose a system image. One should already be selected. Download it. This may take time.
4) Name your device, and hit finish. You can now run your device.

In order to get your project started for the first time, it should be ran in Android Studio. To do this:
1) Open Android Studio, select 'Open' and find your project. Select the Android folder to open.
2) Enter the Build menu located on the bottom bar of the studio.
3) Allow the studio to finish building your project.
4) Run your project. This should open the app in the Android Emulator. This may take several minutes.

From here you'll need to start Metro, which is a JS Bundler that comes with React Native. To start Metro, run

`npm start` 

in the react project folder.

### Running The Project From Commmand Line

1) Open CMD and navigate to your project folder
2) Start Metro
3) Press a

## Troubleshooting and Resources

React Native Setup: https://reactnative.dev/docs/environment-setup?guide=native&package-manager=npm

React Native has its own Troubleshooting page for common issues: https://reactnative.dev/docs/troubleshooting#missing-libraries-for-react

Metro Documentation: https://facebook.github.io/metro/docs/concepts

### Certain files or scripts are not found!
Try checking what folder you're trying to access them from