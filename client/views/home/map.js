if(Meteor.isClient){


  Template.maps.rendered = function() {
    if (! Session.get('maps'))
        gmaps.initialize();

        var objMarker1 = {
            id: 01,
            lat: 39.556869,
            lng:  -89.841562,
            title: "Acbees Apiaries",
            tag: "Farm",
            description: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Acbees Apiaries</h1>'+
            '<div id="bodyContent">'+
            '<p>Acbees apiaries are operated by Arvin & Colleen Pierce. ' +
            'We have several yards in central Illinois, including Maldaners roof top and Illini Country Club. ' +
            'Weve kept treatment-free bees for 10 years, selling raw and natural liquid honey and honeycomb. ' +
            'We also do educational presentations with our observation hive and photos at farmers markets, ' +
            'to groups and to schools.</p>' +
            '<p>217-638-6371</p>' +
            '<p>colnrvn@royell.org</p>' +
            '<p>www.acbees.org</p>'+
            '</div>'+
            '</div>'

        };
        var objMarker2 = {
            id: 02,
            lat: 40.713456,
            lng:  -88.717945,
            title: "Ackerman Ceritified Organic Farm",
            tag: "Farm",
            description: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Ackerman Ceritified Organic Farm</h1>'+
            '<div id="bodyContent">'+
            '<p>We have a small but very unique family farm which has been in operation for 90 years.' +
            'Our farm has had a long rotation since it was purchased in 1924. We became certified organic in 1988 with corn,' +
            'oats, soybeans, wheat, and hay, while maintaining a full-time dairy. While the dairy no longer continues, ' +
            'we added organic produce, herbs, and edamame soybeans in addition to our whole grain corn, soybeans, wheat, and oats.  ' +
            'Thank you for supporting organic, the "real natural"! Call ahead for on-farm pick-up or visit us at the ' +
            'Downtown Bloomington Farmers Market, May through October 7:30am- 12 noon. </p>'+
            '<p>815-945-5722</p>' +
            '<p>ronnga@frontier.com</p>' +
            '</div>'+
            '</div>'

        };
        var objMarker3 = {
            id: 03,
            lat: 41.062519,
            lng:  -88.747863,
            title: "Ana and Betty's Garden",
            tag: "Farm",
            description: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Ana and Bettys Garden</h1>'+
            '<div id="bodyContent">'+
            '<p>Ana and Bettys garden is a sustainable fruit and vegetable operation located 10 miles southeast of Streator. ' +
            'We have set aside one acre out of our family operation of traditional row crops to grow fruit and vegetables' +
            ' in a way that protects our natural resources.  In our first year we were able to grow without the use of any chemicals.' +
            ' We are dedicated to staying small and serving our local community. By the time our grandchildren are working this land,' +
            ' we hope to develop best conservation practices for the entire 68 acres.</p>' +
            '<p>815-674-6952</p>'+
            '<p>Michelleproksa@yahoo.com</p>' +
            '</div>'+
            '</div>'

        };
        var objMarker4 = {
            id: 04,
            lat: 41.018994,
            lng:  -88.679678,
            title: "Antiquity Oaks LLC",
            tag: "Farm",
            description: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Antiquity Oaks LLC</h1>'+
            '<div id="bodyContent">'+
            '<p>We have a CSA garden, fruit, eggs, and meat (pork, chicken, and turkey). ' +
            'Everything is sold directly to the consumer. We use only sustainable growing practices.' +
            'Our animals live o pasture where they get plenty of fresh air and sunshine, while' +
            ' having free access to shelter during bad weather. Call ahead for a visit!</p>' +
            '<p>815-358-2450</p>' +
            '<p>deborah@antiquityoaks.com</p>' +
            '<p>www.antiquityoaks.com</p>' +
            '<p>www.facebook.com/antiquityoaks </p>' +
            '<p>www.twitter.com/antiquityoaks</p>' +
            '</div>'+
            '</div>'

        };
        var objMarker5 = {
            id: 05,
            lat: 40.504601,
            lng:  -88.957607,
            title: "Destihl",
            tag: "Restaurant",
            description: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Destihl</h1>'+
            '<div id="bodyContent">'+
            '<p>DESTIHL is a gastro brewery : artisans of food and beer. DESTIHL' +
            ' creatively combines and reinvents flavors from Americas melting pot using' +
            ' both traditional techniques and contemporary, ethnic/global twists, ' +
            'utilizing many locally raised products and from-scratch cooking. Its brewery' +
            ' handcrafts many beer styles, utilizing classic traditions and new craft brewing ingenuity.</p>' +
            '<p>309-862-2337</p>'+
            '<p>www.destihl.com</p>' +
            '<p>Mon.-Thurs. 11:00-10:00p.m.; Fri & Sat 11am-11pm; Sun 10am-9pm Weekend Brunch Sat & Sun until 2pm</p>' +
            '</div>'+
            '</div>'

          };

          var objMarker6 = {
              id: 06,
              lat: 40.398054,
              lng:  -88.87241,
              title: "Downs Village Market",
              tag: "Market",
              description: '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<h1 id="firstHeading" class="firstHeading">Downs Village Market</h1>'+
              '<div id="bodyContent">'+
              '<p>We are a local farmers market, established in the Village of Downs in 2003.' +
              ' Our 20 vendors offer local and select regional produce, plants and flowers, ' +
              'meat, baked goods, crafts and homemade items. We offer a large variety of items ' +
              'for sale, friendly vendors, convenient parking, and weekly music/entertainment. </p>' +
              '<p>309-378-4223</p>' +
              '<p>Wednesdays, June through September 4 - 6 pm</p>' +
              '</div>'+
              '</div>'

            };

            var objMarker7 = {
                id: 07,
                lat: 40.481288,
                lng:  -88.994287,
                title: "Downtown Bloomington Farmers Market",
                tag: "Market",
                description: '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1 id="firstHeading" class="firstHeading">Downtown Bloomington Farmers Market</h1>'+
                '<div id="bodyContent">'+
                '<p>This producer-only market offers a diverse selection of local, ' +
                'sustainably produced farm products – meats, cheeses, vegetables, eggs, ' +
                'herbs, grains, plants, as well as baked goods, prepared foods, fine ' +
                'arts and educational opportunities. Live Music, cafes, restaurants, shops' +
                ' and galleries enhance the market experience. LINK cards accepted.</p>' +
                '<p>309-829-9599</p>'+
                '<p>www.downtownbloomington.org</p>' +
                '<p>May-October, every Saturday 7:30 am-noon at the downtown square</p>' +
                '<p>Indoor season: December-April, every third Saturday at the U.S. Cellular Coliseum, 101 S. Madison St. in Downtown Bloomington. </p>' +
                '</div>'+
                '</div>'

              };

              var objMarker8 = {
                  //id: 08,
                  lat: 40.11804,
                  lng:  -88.243091,
                  title: "Big Grove Tavern",
                  tag: "Market",
                  description: '<div id="content">'+
                  '<div id="siteNotice">'+
                  '</div>'+
                  '<h1 id="firstHeading" class="firstHeading">Big Grove Tavern</h1>'+
                  '<div id="bodyContent">'+
                  '<p>Big Grove Tavern is a farm-to-table restaurant in Downtown ' +
                  'Champaign, IL, featuring local and fresh seasonal comfort food' +
                  ' in a warm and friendly environment.  We have an extensive beer' +
                  ' and wine list featuring many local breweries as well as carefully' +
                  ' crafted classic and specialty cocktails. Eat, drink & think local.</p>' +
                  '<p>217-239-3505</p>' +
                  '<p>www.biggrovetavern.com</p>' +
                  '<p>Monday through Thursday 11am-10pm; Friday 11am-11pm; Saturday 10am-11pm; Sunday 10am-10pm </p>'+
                  '</div>'+
                  '</div>'

                };

                var objMarker9 = {
                    //id: 08,
                    lat: 40.688969,
                    lng:  -90.049438,
                    title: "Sample1",
                    tag: "Farm",
                    description: 'sample'
                };
                var objMarker10 = {
                    //id: 08,
                    lat: 39.300299,
                    lng:  -89.159546,
                    title: "Sample1",
                    tag: "Farm",
                    description: 'sample'
                };
                var objMarker11 = {
                    //id: 08,
                    lat: 41.095912,
                    lng:  -89.588013,
                    title: "Sample1",
                    tag: "Restaurant",
                    description: 'sample'
                };
                var objMarker12 = {
                    //id: 08,
                    lat: 39.283294,
                    lng:  -88.90686,
                    title: "Sample1",
                    tag: "Restaurant",
                    description: 'sample'
                };
                var objMarker13 = {
                    //id: 08,
                    lat: 39.901309,
                    lng:  -88.555298,
                    title: "Sample1",
                    tag: "Farm",
                    description: 'sample'
                };
                var objMarker14 = {
                    //id: 08,
                    lat: 40.187267,
                    lng:  -90.082397,
                    title: "Sample1",
                    tag: "Market",
                    description: 'sample'
                };
                var objMarker15 = {
                    //id: 08,
                    lat: 39.614152,
                    lng:  -90.335083,
                    title: "Sample1",
                    tag: "Restaurant",
                    description: 'sample'
                };


        // check if marker already exists
        //if (!gmaps.markerExists('id', objMarker.id))
            gmaps.addMarker(objMarker1);
            gmaps.addMarker(objMarker2);
            gmaps.addMarker(objMarker3);
            gmaps.addMarker(objMarker4);
            gmaps.addMarker(objMarker5);
            gmaps.addMarker(objMarker6);
            gmaps.addMarker(objMarker7);
            gmaps.addMarker(objMarker8);
            gmaps.addMarker(objMarker9);
            gmaps.addMarker(objMarker10);
            gmaps.addMarker(objMarker11);
            gmaps.addMarker(objMarker12);
            gmaps.addMarker(objMarker13);
            gmaps.addMarker(objMarker14);
            gmaps.addMarker(objMarker15);
            gmaps.calcBounds();


 /**When new data comes in through the farmPin
  collection Deps.autorun executes and iterates over the data.
  It then checks if the Google Maps Markers already exists**/
    // Deps.autorun(function() {
    //   /**This line retrieves the data that holds a location**/
    //     var pages = fPins.find().fetch();
    //
    //     _.each(pages, function(page) {
    //         if (typeof page.location.lat !== 'undefined' &&
    //             typeof page.location.long !== 'undefined') {
    //
    //             var objMarker = new google.maps.Marker({
    //                 id: page._id,
    //                 lat: page.location.lat,
    //                 lng: page.location.long,
    //                 title: page.name
    //             });
    //
    //             // check if marker already exists
    //             //if (!gmaps.markerExists('id', objMarker.id))
    //                 gmaps.addMarker(objMarker);
    //
    //         }
    //     });
    // });
}


Template.maps.destroyed = function() {
    Session.set('maps', false);
}

}
