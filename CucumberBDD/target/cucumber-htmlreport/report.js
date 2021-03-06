$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "CRM login test",
  "description": "Verify CRM login page functionality",
  "id": "crm-login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9251903428,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Testing use of background",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "print test case started",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInTest.print_test_case_started()"
});
formatter.result({
  "duration": 430074336,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Test Login with valid credentials",
  "description": "",
  "id": "crm-login-test;test-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on CRM login page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter valid username and password and click on Login button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should successfully login",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInTest.i_am_on_CRM_login_page()"
});
formatter.result({
  "duration": 43536134,
  "status": "passed"
});
formatter.match({
  "location": "LogInTest.i_enter_invalid_username_and_password()"
});
formatter.result({
  "duration": 20677331342,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"name\",\"selector\":\"username12\"}\n  (Session info: chrome\u003d61.0.3163.79)\n  (Driver info: chromedriver\u003d2.32.498550 (9dec58e66c31bcc53a9ce3c7226f0c1c5810906a),platform\u003dWindows NT 6.1.7600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 20.66 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027KunalMalik\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.32.498550 (9dec58e66c31bcc53a9ce3c7226f0c1c5810906a), userDataDir\u003dC:\\Users\\Kannu\\AppData\\Local\\Temp\\scoped_dir5104_18982}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.79, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 0af29114bf4cd20c4bb2f33a73ac38d1\n*** Element info: {Using\u003dname, value\u003dusername12}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat pages.LoginPage.login(LoginPage.java:26)\r\n\tat testcases.LogInTest.i_enter_invalid_username_and_password(LogInTest.java:75)\r\n\tat ✽.When I enter valid username and password and click on Login button(Login.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LogInTest.i_should_successfully_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2131647421,
  "status": "passed"
});
});