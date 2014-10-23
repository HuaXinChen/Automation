#import "../../../../tuneup_js/tuneup.js"
#import "Walca.js"


//Helper Functions
function log(message) {
	UIALogger.logMessage(message);
}

function logTree(message) {
	UIATarget.localTarget().logElementTree();
}

function test(testName, testSteps) {
	try {
		UIALogger.logStart(testName);
		testSteps();
		UIALogger.logPass("Test passed");
	} catch(exception) {
		UIALogger.logError(exception.message);
		UIATarget.localTarget().logElementTree();
		UIALogger.logFail("Test failed");
		throw exception;
	}
}

function screen(fileName) {
	UIATarget.localTarget().captureScreenWithName(fileName);
}

function delayInSeconds(seconds) {
	UIATarget.localTarget().delay(seconds);
}

function typeTextUsingKeyboard(text){
    target.frontMostApp().keyboard().typeString(text);
}

function randomEmail(numOfCharacter)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < numOfCharacter; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text + "@pnimedia.com";
}

function phoneNumber(numOfDigits)
{
    var text = "";
    var possible = "0123456789";

    for( var i=0; i < numOfDigits; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function isElementValid(element)
{
    UIATarget.localTarget().pushTimeout(.1);
    
    var result = element.waitForInvalid();
    
    UIATarget.localTarget().popTimeout();
    
    return !result;   
}

function predicateWithFormat(format) {
    var parts = format.split("%@");
    var reslut = [];
    
    reslut.push(parts[0]);
    for (var i = 1; i < parts.length; i++) {
        var value = arguments[i];
        
        if(typeof value == 'string') {
            var allQuotes = new RegExp('"', 'g');
            value = '"' + value.replace(allQuotes, '||"') + '"';
        }
        
        var part = parts[i];
        reslut.push(value, part);
    }
    
    return reslut.join('');
}


function searchWithPredicate (predicate) {
    
    var startElement = UIATarget.localTarget().frontMostApp().mainWindow();
    
    function recursiveSearch(predicate, startElement) {
        UIATarget.localTarget().pushTimeout(0);
        var elements = startElement.elements();
        var found = elements.firstWithPredicate(predicate);
        UIATarget.localTarget().popTimeout();

        if(found.isValid()) return found;
        for(var i = 0; i < elements.length; i++) {
            var element = elements[i];
            found = recursiveSearch(predicate, element);
            if (found) return found;
        }

        return null;
    }

    var timeoutInMillis = UIATarget.localTarget().timeout() * 1000;
    var start = new Date();
    do {
        var now = new Date();
        var found = recursiveSearch(predicate, startElement);
        UIATarget.localTarget().delay(0.1);
    } while(!found && now - start < timeoutInMillis);

    return found;
}
    


