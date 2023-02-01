const places = [
 {
    id: 1,
    place: "London",
    country: "uk",
    dateStart: "22.12.2022",
    dateEnd: "27.12.2022",
    coverImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/London_Big_Ben_Phone_box.jpg/640px-London_Big_Ben_Phone_box.jpg",
    info: "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.",

    googleMapLink: "https://www.google.com/maps/place/London,+UK/data=!4m2!3m1!1s0x47d8a00baf21de75:0x52963a5addd52a99?sa=X&ved=2ahUKEwjRnPit6vL8AhXUR_EDHUCpBG8Q8gF6BQiCARAB"
},
{
    id: 2,
    place: "Sorrento",
    country: "Italy",
    dateStart: "09.07.2022",
    dateEnd: "16.07.2022",
    coverImg: "https://tourscanner.com/blog/wp-content/uploads/2022/04/things-to-do-in-Sorrento.jpg",
    info: "orrento is a coastal town in southwestern Italy, facing the Bay of Naples on the Sorrentine Peninsula. Perched atop cliffs that separate the town from its busy marinas, it’s known for sweeping water views and Piazza Tasso, a cafe-lined square. The historic center is a warren of narrow alleys that's home to the Chiesa di San Francesco, a 14th-century church with a tranquil cloister.",

    googleMapLink: "https://www.google.co.il/maps/place/80067+Sorrento,+Metropolitan+City+of+Naples,+Italy/@40.6237862,14.3576818,14z/data=!3m1!4b1!4m5!3m4!1s0x133b99536dbf5b61:0x2644eb57abc0ce40!8m2!3d40.6262982!4d14.375782?hl=en&authuser=0"
},
{
    id: 3,
    place: "Berlin",
    country: "Germany",
    dateStart: "09.01.2020",
    dateEnd: "13.01.2020",
    coverImg: "https://www.germany.travel/media/redaktion/content/bundeslaender/berlin/Berlin_Brandenburger_Tor_im_Sonnenuntergang_Leitmotiv_German_Summer_Cities.jpg",
    info: "Berlin, Germany’s capital, dates to the 13th century. Reminders of the city's turbulent 20th-century history include its Holocaust memorial and the Berlin Wall's graffitied remains. Divided during the Cold War, its 18th-century Brandenburg Gate has become a symbol of reunification. The city's also known for its art scene and modern landmarks like the gold-colored, swoop-roofed Berliner Philharmonie, built in 1963.",

    googleMapLink: "https://www.google.com/search?q=berlin&source=lmns&bih=694&biw=1153&hl=en&sa=X&ved=2ahUKEwjNtv3m6_T8AhU2nCcCHX_fDQwQ_AUoAHoECAEQAA#"
},
{
    id: 4,
    place: "Warsaw ",
    country: "Poland",
    dateStart: "30.08.2017",
    dateEnd: "05.09.2017",
    coverImg: "https://assets3.thrillist.com/v1/image/2819918/792x528/scale;webp=auto;jpeg_quality=60;progressive.jpg",
    info: "Warsaw, officially the Capital City of Warsaw, is the capital and largest city of Poland. The metropolis stands on the River Vistula in east-central Poland, and its population is officially estimated ",

    googleMapLink: "https://www.google.com/search?q=warsaw+poland&ei=oqHaY9bVGc7SkgXShY7QCA&gs_ssp=eJzj4tDP1TewMMyNN2D04i1PLCpOLFcoyM9JzEsBAF14B_4&oq=WAR&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgAMgUILhCRAjIOCC4QgAQQxwEQrwEQ1AIyBQgAEIAEMgsILhCABBCxAxDUAjILCC4QgAQQsQMQgwEyCwgAEIAEELEDEIMBMggILhCxAxCABDIICC4QgAQQsQMyCAgAEIAEELEDMggILhCABBCxAzoKCAAQRxDWBBCwAzoHCAAQsAMQQzoKCC4Q1AIQsAMQQzoNCAAQ5AIQ1gQQsAMYAToPCC4Q1AIQyAMQsAMQQxgCOhIILhDHARDRAxDIAxCwAxBDGAI6DAguEMgDELADEEMYAjoKCC4QxwEQrwEQQzoRCC4QgwEQxwEQsQMQ0QMQgAQ6CAgAELEDEIMBOgUILhCABDoECC4QQzoECAAQQzoHCC4Q1AIQQ0oECEEYAEoECEYYAVCcAljxBmDDEGgCcAB4AIABmQGIAYUDkgEDMC4zmAEAoAEByAERwAEB2gEGCAEQARgJ2gEGCAIQARgI&sclient=gws-wiz-serp#"
},

{
    id: 6,
    place: "Amsterdam ",
    country: "Netherlands",
    dateStart: "15.07.2017",
    dateEnd: "22.07.2017",
    coverImg: "https://cdn.britannica.com/30/180130-138-4FC01CDD/Overview-Amsterdam.jpg?w=800&h=450&c=crop",
    info: "hessaloniki is a Greek port city on the Thermaic Gulf of the Aegean Sea. Evidence of Roman, Byzantine and Ottoman history remains, especially around Ano Poli, the upper town. The ruins of Roman Emperor Galerius’ 4th-century palace include the Rotunda that has been both a church and a mosque. Much of the city center was destroyed in the Great Fire of 1917. The rebuilt 20th-century city has a modern European layout.",

    googleMapLink: "https://www.google.com/search?q=amsterdam&bih=694&biw=1153&hl=en&ei=2KPaY8GfEfyakdUPg72PoA0&oq=amster&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgBMg4ILhDHARCvARDUAhCRAjIICAAQsQMQkQIyBQgAEIAEMgUIABCABDILCAAQgAQQsQMQgwEyBQgAEIAEMggILhCxAxCABDILCC4QgAQQxwEQrwEyCwguEIAEEMcBEK8BMgUIABCABDoKCAAQRxDWBBCwAzoLCC4QxwEQ0QMQkQI6EQguELEDEIMBEMcBENEDEJECOgsILhCABBDHARDRAzoRCC4QgAQQsQMQgwEQxwEQ0QM6DgguEIAEELEDEMcBENEDOggIABCxAxCDAToICC4Q1AIQkQI6DgguEMcBELEDENEDEIAEOggIABCABBCxA0oECEEYAEoECEYYAFCAB1iYD2DSFWgDcAF4AIABwwGIAc8GkgEDMC42mAEAoAEByAEIwAEB&sclient=gws-wiz-serp#"
},

{
    id: 5,
    place: "Thessaloniki ",
    country: "Greece",
    dateStart: "10.08.2016",
    dateEnd: "22.08.2016",
    coverImg: "https://www.discovergreece.com/sites/default/files/styles/hd_half/public/2019-12/1-the_white_tower_of_thessaloniki_by_yorgos_triantafyllou-1.jpg?itok=MTId2QF9",
    info: "hessaloniki is a Greek port city on the Thermaic Gulf of the Aegean Sea. Evidence of Roman, Byzantine and Ottoman history remains, especially around Ano Poli, the upper town. The ruins of Roman Emperor Galerius’ 4th-century palace include the Rotunda that has been both a church and a mosque. Much of the city center was destroyed in the Great Fire of 1917. The rebuilt 20th-century city has a modern European layout.",

    googleMapLink: "https://www.google.com/search?q=warsaw+poland&ei=oqHaY9bVGc7SkgXShY7QCA&gs_ssp=eJzj4tDP1TewMMyNN2D04i1PLCpOLFcoyM9JzEsBAF14B_4&oq=WAR&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgAMgUILhCRAjIOCC4QgAQQxwEQrwEQ1AIyBQgAEIAEMgsILhCABBCxAxDUAjILCC4QgAQQsQMQgwEyCwgAEIAEELEDEIMBMggILhCxAxCABDIICC4QgAQQsQMyCAgAEIAEELEDMggILhCABBCxAzoKCAAQRxDWBBCwAzoHCAAQsAMQQzoKCC4Q1AIQsAMQQzoNCAAQ5AIQ1gQQsAMYAToPCC4Q1AIQyAMQsAMQQxgCOhIILhDHARDRAxDIAxCwAxBDGAI6DAguEMgDELADEEMYAjoKCC4QxwEQrwEQQzoRCC4QgwEQxwEQsQMQ0QMQgAQ6CAgAELEDEIMBOgUILhCABDoECC4QQzoECAAQQzoHCC4Q1AIQQ0oECEEYAEoECEYYAVCcAljxBmDDEGgCcAB4AIABmQGIAYUDkgEDMC4zmAEAoAEByAERwAEB2gEGCAEQARgJ2gEGCAIQARgI&sclient=gws-wiz-serp#"
},

]

export default places