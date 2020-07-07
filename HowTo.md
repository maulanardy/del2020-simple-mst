### Change Package Name (example to "com.myapp.news")

#### Android
Change project subfolder name from "android/app/src/main/java/com/moonlay/simpleapp" to "android/app/src/main/java/com/myapp/new"

then manualy change old packagename

in /android/app/src/main/java/com/myapp/new/MainActivity.java
```
package com.myapp.news;
```

in /android/app/src/main/java/com/myapp/new/MainApplication.java
```
package com.myapp.news;
...
...
Class.forName("com.myapp.news.ReactNativeFlipper");
```

in /android/app/src/main/AndroidManifest.xml
```
package="com.myapp.news"
```

in /android/app/build.gradle
```
applicationId "com.myapp.news"
```

in /android/app/BUCK
```
android_build_config(
    name = "build_config",
    package = "com.myapp.news",
)

android_resource(
    name = "res",
    package = "com.myapp.news",
    res = "src/main/res",
)
```

Gradle clean in in /android folder
```
./gradlew clean
```

#### IOS
Select Target App - General
change Bundle Identifier value in Identity section with
```
com.myapp.news
```

### Change AppName and Display Name (example to "NewsApp" and "News App")
in app.json
```
{
  "name": "NewsApp",
  "displayName": "News App"
}
```

in package.json
```
"name": "NewsApp",
```

#### Android
in android/settings.gradle
```
rootProject.name = 'NewsApp'
```

in /android/app/src/main/java/com/myapp/new/MainActivity.java
```
return "NewsApp";
```

in android/app/src/main/res/values/string.xml
```
<string name="app_name">News App</string>
```

Gradle clean in in /android folder
```
./gradlew clean
```

#### IOS
Open Xcode

Select Target App - General
change Display Name value in Identity section with
```
News App
```

select all folder and file named "SimpleApp" , change identity and Type name to "NewsApp" in file inspector

delete pods folder

in Folder ios simply find file contain "SimpleApp" and rename to "NewsApp"

install pod dependency
```
cd ios && pod install && cd ..
```