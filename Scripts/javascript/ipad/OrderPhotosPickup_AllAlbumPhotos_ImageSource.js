#import "../Automation.js"

function testSteps () {
    
    var target = UIATarget.localTarget();
	var window = target.frontMostApp().mainWindow();

    
    //WalcaApp.loginWithDefault();
    
	WalcaApp.goToOrderPrintScreen();
    
	delayInSeconds(3);
    
    WalcaApp.OrderPrintScreen.imageSourceByName("Walmart Photo Centre").tap();
	
    WalcaApp.OrderPrintScreen.imageSourceByName("automation, 19 photos, Aug 29, 2014").tap();
    
    delayInSeconds(1);
    
    UIATarget.localTarget().frontMostApp().mainWindow().collectionViews()[0].tapWithOptions({tapOffset:{x:0.08, y:0.08}});

    delayInSeconds(1);
	
    WalcaApp.OrderPrintScreen.orderPrintsButton().tap();
    
    WalcaApp.OrderPrintScreen.checkoutButton().tap();
    
    delayInSeconds(5);
    
	WalcaApp.OrderPrintScreen.PickupLocationScreen.locationSearchBar().tap();
    
    typeTextUsingKeyboard("vancouver\n");
    
    delayInSeconds(2);
    
    WalcaApp.OrderPrintScreen.PickupLocationScreen.locationCellByName("Walmart Photo Centre 3057, 925 Marine Drive N., North Vancouver, V7P 1S2").tap();
    
    UIATarget.localTarget().frontMostApp().mainWindow().tableViews()["Empty list"].tapWithOptions({tapOffset:{x:0.49, y:0.49}});
    
    delayInSeconds(5);
    
    
    //var predicate = predicateWithFormat("value like %@", "Phone Number");
    
    var phoneNumberCell = searchWithPredicate(predicateWithFormat("value like %@", "Phone Number"));
    
    assertNotNull(phoneNumberCell, "Phone Number Cell not found");
    
    phoneNumberCell.tap();
    
	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()[9].textFields()[2].tap();
	
    
    
    target.frontMostApp().keyboard().typeString("6040000000");
	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Pick Up Details"].tap();


	//Place Order now
	target.frontMostApp().mainWindow().buttons()["Place Order"].tap();
	delayInSeconds(5);


	var orderID = target.frontMostApp().mainWindow().tableViews()["Empty list"].staticTexts().firstWithPredicate("name CONTAINS '120' ").name();

	log(orderID);

	screen("Order screen");

	//target.frontMostApp().navigationBar().tapWithOptions({tapOffset:{x:0.52, y:0.36}});
	//target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["$0.00, Total"].tap();
	//target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Walmart Photo Centre 3057, 925 Marine Drive N., North Vancouver, V7P 1S2, Store Hours, Monday, 7:00 AM-11:00 PM, Tuesday, 7:00 AM-11:00 PM, Wednesday, 7:00 AM-11:00 PM, Thursday, 7:00 AM-11:00 PM, Friday, 7:00 AM-11:00 PM, Saturday, 7:00 AM-11:00 PM, Sunday, 7:00 AM-11:00 PM, Print Pricing, 4x6, $0.19 each, 5x7, $1.97 each, 8x10, $4.97 each, Legal"].tap();
	target.frontMostApp().mainWindow().buttons()["Done"].tap();

	delayInSeconds(1);

	target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].links()["Menu"].images()["Menu"].tap();

	delayInSeconds(1);
	
	target.frontMostApp().mainWindow().tableViews()["Empty list"].tapWithOptions({tapOffset:{x:0.35, y:0.13}});
	//target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Order 120831504, 9/2/2014, 2:46 PM - Cancelled"].tap();
	
	delayInSeconds(1);
	
	var predicateString = "name CONTAINS '" + orderID + "' ";

	target.frontMostApp().mainWindow().tableViews()["Empty list"].cells().firstWithPredicate(predicateString).tap();

	delayInSeconds(1);

	target.frontMostApp().mainWindow().tableViews()["Empty list"].staticTexts().firstWithName(orderID).tap();
	
	screen("Order status screen");

	target.frontMostApp().navigationBar().buttons()["Back"].tap();


	WalcaApp.logout();

}

test("OrderPhotosPickup_AllAlbumPhotos_ImageSource", testSteps);