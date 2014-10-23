#import "../Automation.js"

function testSteps () {
	var target = UIATarget.localTarget();
	var window = target.frontMostApp().mainWindow();

	WalcaApp.login();

	target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].links()["Menu"].images()["Menu"].tapWithOptions({tapOffset:{x:0.33, y:0.36}});
	target.delay(1);
	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Upload"].tap();
	target.delay(1);
	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Camera Roll, 19 photos"].tap();


	target.frontMostApp().mainWindow().collectionViews()[0].tapWithOptions({tapOffset:{x:0.09, y:0.09}});
	target.frontMostApp().mainWindow().collectionViews()[0].tapWithOptions({tapOffset:{x:0.34, y:0.11}});
	target.frontMostApp().mainWindow().collectionViews()[0].tapWithOptions({tapOffset:{x:0.59, y:0.20}});



	target.frontMostApp().toolbar().buttons()["Upload"].tap();
	target.delay(1);

	target.frontMostApp().mainWindow().scrollViews()[0].textFields()[0].tap();
	target.frontMostApp().keyboard().typeString("random1");
	target.frontMostApp().mainWindow().scrollViews()[0].staticTexts()["-OR-"].tapWithOptions({tapOffset:{x:0.50, y:0.57}});
	target.frontMostApp().mainWindow().buttons()["Upload Now"].tap();

	target.delay(3);

	UIATarget.localTarget().logElementTree();


	target.frontMostApp().mainWindow().tableViews()["Empty list"].tapWithOptions({tapOffset:{x:0.55, y:0.58}});


	target.delay(10);


	target.frontMostApp().mainWindow().tableViews()["Empty list"].tapWithOptions({tapOffset:{x:0.49, y:0.60}});
	//target.frontMostApp().mainWindow().buttons()["Continue"].tap();
	target.delay(1);

	target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].links()["ORDER PRINTS"].tap();
	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Walmart Photo Centre"].tap();
	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["random1, 3 photos, Aug 29, 2014"].tap();
	target.frontMostApp().navigationBar().leftButton().tap();
	target.frontMostApp().navigationBar().leftButton().tap();

	window.scrollViews()[0].webViews()[0].links()["Menu"].images()["Menu"].tap();

	delayInSeconds(1);

	window.tableViews()["Empty list"].cells()["Settings"].tap();

	target.frontMostApp().navigationBar().buttons()["Sign Out"].tap();

}

test("UploadPictures_RandomAlbumPictures_Upload", testSteps);