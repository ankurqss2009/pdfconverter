# Samples for the PDF Services Node.js SDK

This sample project helps you get started with the  PDF Services Node.js SDK.

The sample JS scripts illustrate how to perform PDF-related actions (such as converting to and from the PDF format) using 
the SDK. **Please note that the PDF Services Node.js SDK supports only server side use cases.**

## Prerequisites
The sample application has the following requirements:
* Node.js : Version 10.13 or above. Node installation instructions can be found 
[here](https://nodejs.org/en/download/).


## Authentication Setup

The credentials file and corresponding private key file for the samples is ```pdfservices-api-credentials.json``` and ```private.key``` 
respectively. Before the samples can be run, replace both the files with the ones present in the downloaded zip file at 
the end of creation of credentials via [Get Started](https://www.adobe.io/apis/documentcloud/dcsdk/gettingstarted.html?ref=getStartedWithServicesSdk) workflow.

The SDK also supports providing the authentication credentials at runtime, without storing them in a config file. Please
refer this [section](#create-a-pdf-file-from-a-docx-file-by-providing-in-memory-authentication-credentials) to 
know more.

## Quota Exhaustion

If you receive ServiceUsageError during the Samples run, it means that trial credentials have exhausted their usage quota. 
Please [contact us](https://www.adobe.com/go/pdftoolsapi_requestform) to get paid credentials.

## Build with npm

Run the following command to build the project:
```$xslt
npm install
```

Note that the PDF Services SDK is listed as a dependency in the package.json and will be downloaded automatically.

## A Note on Logging
For logging, this SDK uses the [log4js API](https://www.npmjs.com/package/log4js) . 
Upon running, the SDK searches for a file ```config/pdfservices-sdk-log4js-config.json``` in the working directory, and reads the
logging properties from there. If no configuration file is provided, default logging, i.e. logging INFO logs to the console is enabled. The clients can change the logging settings as per their needs.

## Build with npm

run file convert.js using nodejs
node convert.js
In convert.js have method call readDir pass the source and destination directory name
By default src directory is input and destination directory is output 
these 2 directory under current project folder.