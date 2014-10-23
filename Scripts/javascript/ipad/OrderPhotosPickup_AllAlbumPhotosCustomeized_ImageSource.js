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

	target.frontMostApp().mainWindow().collectionViews()[0].cells()["Printing Style"].buttons()["Matte"].tap();
	target.frontMostApp().mainWindow().collectionViews()[0].cells()["Printing Style"].switches()[0].setValue(1);
	target.frontMostApp().mainWindow().collectionViews()[0].cells()["Quantity"].buttons()[1].tap();
	target.frontMostApp().mainWindow().collectionViews()[0].cells()["Quantity"].collectionViews()[0].cells().firstWithName("1").tap();
	target.frontMostApp().mainWindow().collectionViews()[0].cells()["Quantity"].buttons().firstWithName("0").tap();
	target.frontMostApp().mainWindow().collectionViews()[0].cells()["Quantity"].collectionViews()[0].cells().firstWithName("1").tap();



	target.frontMostApp().navigationBar().buttons()["Checkout"].tap();
	target.delay(5);
	//Use GPS

	target.frontMostApp().mainWindow().tableViews()["Empty list"].searchBars()[0].tap();
	target.frontMostApp().keyboard().typeString("vancouver\n");
	target.delay(2);
	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Walmart Photo Centre 3057, 925 Marine Drive N., North Vancouver, V7P 1S2"].tap();
	target.frontMostApp().mainWindow().tableViews()["Empty list"].tapWithOptions({tapOffset:{x:0.49, y:0.49}});

	target.delay(5);

	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["$0.35, GST"].tap();
	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["$0.49, PST"].tap();
	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["$7.78, Total"].tap();
	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["8x10 matte, 1, $4.97, $4.97"].tap();
	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["5x7 matte, 1, $1.97, $1.97"].tap();




	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()[11].textFields().firstWithPredicate("value like 'Phone Number'").tap();


	target.frontMostApp().keyboard().typeString("6040000000");
	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Pick Up Details"].tap();
	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Card Details"].tap();
	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()[13].textFields().firstWithPredicate("value like 'Card Type'").tap();

	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()[13].textFields().firstWithPredicate("value like 'Card Number'").tap();
	target.frontMostApp().keyboard().typeString("45160500055");
	target.frontMostApp().keyboard().keys()["Delete"].tap();
	target.frontMostApp().keyboard().typeString("2099");
	target.frontMostApp().windows()[1].toolbar().buttons()["Next"].tap();
	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()[13].textFields().firstWithPredicate("value like 'Name On Card'").tap();
	target.frontMostApp().keyboard().typeString("Jason Kossen");
	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()[13].textFields()[1].scrollToVisible();
	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()[13].textFields().firstWithPredicate("value like 'Expiry Date'").tap();
	target.frontMostApp().windows()[1].pickers()[0].wheels()[0].dragInsideWithOptions({startOffset:{x:0.53, y:0.71}, endOffset:{x:0.47, y:0.46}, duration:1.3});
	target.frontMostApp().windows()[1].pickers()[0].wheels()[1].dragInsideWithOptions({startOffset:{x:0.39, y:0.67}, endOffset:{x:0.42, y:0.42}, duration:1.3});
	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()[13].textFields().firstWithPredicate("value like 'Card Verification Code'").tap();
	target.frontMostApp().keyboard().typeString("448");
	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Billing Address"].scrollToVisible();
	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()[16].textFields().firstWithPredicate("value like 'Phone Number'").tap();
	target.frontMostApp().keyboard().typeString("6040000000");
	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()[16].textFields().firstWithPredicate("value like 'Line 1'").tap();
	target.frontMostApp().keyboard().typeString("Abc");
	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()[16].textFields().firstWithPredicate("value like 'City'").tap();
	target.frontMostApp().keyboard().typeString("Abc");


	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Store Info"].tap();


	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()[16].textFields().firstWithPredicate("value like 'Province'").tap();
	target.frontMostApp().keyboard().typeString("Bc");
	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()[16].textFields().firstWithPredicate("value like 'Postal Code'").tap();
	target.frontMostApp().keyboard().typeString("V5G5G5");

	target.frontMostApp().navigationBar().buttons()["Back"].tap();

	target.frontMostApp().navigationBar().buttons()["Back"].tap();

	target.frontMostApp().navigationBar().buttons()["Empty Cart"].tap();


	WalcaApp.logout();

}

test("OrderPhotosPickup_AllAlbumPhotosCustomeized_ImageSource", testSteps);