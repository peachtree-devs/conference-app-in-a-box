# Conference App in a Box 
### Render ATL Version tho

The project was forked from Dabit's conference in a box version

The dope version was developed by Monet Fulgham & Peachtree Devs

🛠 Built with React Native, GraphQL, AWS Amplify, & AWS AppSync

### Set up

#### Android 

1. [Download Android Studio](https://developer.android.com/studio)

2. Checked the following installations 
    ````
    - Android SDK
    - Android SDK Platform
    - Performance (Intel ® HAXM) (See here for AMD)
    - Android Virtual Device
    ````
   
3. Create the following file "./android/local.properties".
    ```sh
    sdk.dir=/Users/<USERNAME>/Library/Android/sdk
    ```
   This point the Android project to your local SDK
   
4. Download Android Emulator
    ```
    - Open the Android Studio
    - [Shift] + [CMD] + [A]
    - Enter "AVD Manager"
    - Click "Create Virtual Device"
    - Select either Pixel 3a or Pixel 3
    - Click the Emulator (Must be open before project is started)
    ```



### How to run app locally

1. Clone the repo & install the dependencies
    ```sh
    ~ git clone https://github.com/peachtree-devs/conference-app-in-a-box.git
    
    ~ cd conference-app-in-a-box
    
    ~ yarn || yarn install
    ```

2. Open Emulator
    ```sh
   Open Android Studio and start the installed emulator
    ```

3. Starting Android
    ```sh
    ~ yarn android 
    ```
   
4. Watch it open
