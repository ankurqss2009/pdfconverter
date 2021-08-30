const PDFServicesSdk = require('@adobe/pdfservices-node-sdk'),
    fs = require('fs');

const srcDir = "input", destDir = "output";

const credentials =  PDFServicesSdk.Credentials
.serviceAccountCredentialsBuilder()
.fromFile("pdfservices-api-credentials.json")
.build();

const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
createPdfOperation = PDFServicesSdk.CreatePDF.Operation.createNew();

const convertToPdf = (fileName,sourceDir,destDirName)=>{
    try {
        const docxReadableStream = fs.createReadStream(`${sourceDir}/${fileName}.docx`);
        const input = PDFServicesSdk.FileRef.createFromStream(docxReadableStream, PDFServicesSdk.CreatePDF.SupportedSourceFormat.docx);
        createPdfOperation.setInput(input);
    
        createPdfOperation.execute(executionContext)
            .then(result => result.saveAsFile(`${destDirName}/${fileName}.pdf`))
            .catch(err => {
                if(err instanceof PDFServicesSdk.Error.ServiceApiError
                    || err instanceof PDFServicesSdk.Error.ServiceUsageError) {
                    console.log('Exception encountered while executing operation', err);
                } else {
                    console.log('Exception encountered while executing operation', err);
                }
            });
    } catch (err) {
        console.log('Exception encountered while executing operation', err);
    }
}

const readDir = (srcDir,destDir)=>{
    fs.readdirSync(srcDir).forEach(file => {
        console.log(file);
        const  [name,ext] = file.split('.');
        convertToPdf(name,srcDir,destDir)
      }); 
}

readDir(srcDir,destDir);