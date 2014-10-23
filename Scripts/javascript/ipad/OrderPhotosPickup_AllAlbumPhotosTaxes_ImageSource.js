#import "../Automation.js"

function testSteps () {
	var target = UIATarget.localTarget();
	var window = target.frontMostApp().mainWindow();

	WalcaApp.login();

	target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].links()["ORDER PRINTS"].links()["ORDER PRINTS"].tap();
	target.delay(3);
	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Walmart Photo Centre"].tap();
	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["automation, 19 photos, Aug 29, 2014"].tap();
	target.delay(1);
	target.frontMostApp().mainWindow().collectionViews()[0].tapWithOptions({tapOffset:{x:0.08, y:0.08}});
	target.delay(1);
	target.frontMostApp().toolbar().buttons()["Order Prints"].tap();

	target.frontMostApp().mainWindow().collectionViews()[0].cells()["Quantity"].buttons()[2].tap();
	target.frontMostApp().mainWindow().collectionViews()[0].cells()["Quantity"].collectionViews()[0].cells().firstWithName("2").tap();



	target.frontMostApp().navigationBar().buttons()["Checkout"].tap();

	target.delay(5);

	target.frontMostApp().mainWindow().tableViews()["Empty list"].searchBars()[0].tap();
	target.frontMostApp().keyboard().typeString("vancouver\n");
	target.delay(2);
	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()[0].tap();
	target.frontMostApp().mainWindow().tableViews()["Empty list"].tapWithOptions({tapOffset:{x:0.48, y:0.51}});

	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["$0.50, GST"].tap();
	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["$0.70, PST"].tap();
	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["$11.14, Total"].tap();


	target.delay(2);

	target.frontMostApp().navigationBar().buttons()["Back"].tap();

	target.frontMostApp().mainWindow().tableViews()["Empty list"].searchBars()[0].tap();
	target.frontMostApp().mainWindow().tableViews()["Empty list"].buttons()["Clear text"].tap();
	target.frontMostApp().keyboard().typeString("halifax\n");
	target.delay(2);
	//target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()[0].tap();
	target.frontMostApp().mainWindow().tableViews()["Empty list"].tapWithOptions({tapOffset:{x:0.48, y:0.51}});

	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["$1.49, GST"].tap();
	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["$11.43, Total"].tap();

	target.frontMostApp().navigationBar().buttons()["Back"].tap();

	target.frontMostApp().navigationBar().buttons()["Back"].tap();

	target.frontMostApp().navigationBar().buttons()["Empty Cart"].tap();

	WalcaApp.logout();

}

test("OrderPhotosPickup_AllAlbumPhotosTaxes_ImageSource", testSteps);