// right click disabled

// document.addEventListener("contextmenu", function(event) {
//     event.preventDefault();
// });




// home page control

function loadContenthome() {

    const container = document.getElementById("main-content");
    container.innerHTML = ""; // Clear previous cards
    
    let data = [
        { title: "Card 1", description: "This is the first card." },
        { title: "Card 2", description: "This is the second card." },
        
    ];

    data.forEach((item, index) => {
        if(index % 2 === 0) {
        const card = document.createElement("main-content");
        card.classList.add("card");
        card.innerHTML = ` <section class="articles">
        <div class="section-header">
            <span>${index+1} OF ${data.length} / <strong>OVERVIEW</strong></span>
            <a href="#" class="view-all">View All</a>
        </div>

        <div class="article-container">
            <div class="article-image">
                <img src="./src/images/chapter_1_birth_control_1418968089.webp" alt="Happy couple">
            </div>
            <div class="article-list">
                <div class="article">
                    <h3>What to Consider When Choosing Birth Control</h3>
                    <p>The best birth control is the method you're most likely to use. Here are some other
                        things to consider as you decide.</p>
                </div>
                <div class="article">
                    <h3><a href="#">How and Where to Get Birth Control</a></h3>
                    <p>You've got lots of birth control options. Here's how to get them, and what to do if costs
                        get in the way.</p>
                </div>
                <div class="article">
                    <h3>Birth Control: How to Talk to Your OB/GYN</h3>
                    <p>If you plan to use birth control other than condoms, you'll need to see a doctor. First,
                        you need to start the conversation.</p>
                </div>
                <div class="article">
                    <h3>How to Talk to Your Partner About Birth Control</h3>
                    <p>Birth control can be an awkward topic. But it's an important heart-to-heart talk to have
                        before sex with your partner.</p>
                </div>
            </div>
        </div>
    </section>

     `;
        container.appendChild(card);
    }

    else{
        const card = document.createElement("main-content");
        card.classList.add("card");
        card.innerHTML = ` 
        <section class="articles">
            <div class="section-header">
                <span>${index+1} OF ${data.length}/ <strong>TYPES</strong></span>
                <a href="#" class="view-all">View All</a>
            </div>
    
            <div class="article-container">
                <div class="article-list">
                    <div class="article">
                        <h3>Birth Control: What Type Is Right for You?</h3>
                        <p>You have a lot of choices for birth control, from condoms to caps to pills. Find one that
                            you're confident with.</p>
                    </div>
                    <div class="article">
                        <h3>How Effective Are Different Types of Birth Control?</h3>
                        <p>The effectiveness of some birth control methods depends in part on how carefully you use
                            them.</p>
                    </div>
                    <div class="article">
                        <h3>Nonhormonal Birth Control</h3>
                        <p>Nonhormonal birth control is any method that doesn't affect women's hormones. But they
                            might not be ideal for some people.</p>
                    </div>
                    <div class="article">
                        <h3>Best Birth Control for STI and Pregnancy Prevention</h3>
                        <p>If your goal is to prevent both pregnancy and STIs, there are only a few ways to make
                            that happen.</p>
                    </div>
                </div>
                <div class="article-image">
                    <img src="./src/images/chapter_1_birth_control_1418968089.webp">
                </div>
            </div>
        </section>

     `;
        container.appendChild(card);
    }




    });
}

//Hospitals page

function loadContenthospitals(){
    const container = document.getElementById("main-content");
    container.innerHTML = "";

    const card = document.createElement("main-content");
    card.classList.add("card");
    card.innerHTML = ` <h1> Hospitals </h1>

 `;
    container.appendChild(card);
  
}
  

function family_planning(){
    const container = document.getElementById("main-content");
    container.innerHTML = "";

    const card = document.createElement("main-content");
    card.classList.add("card");
    card.innerHTML = `
    <div style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #fff;">

    <!-- Header -->
    <header style="background-color: white; margin-left:20% padding: 15px;">
        <h1 style="color: red; margin-left: 8%; font-size: 36px;">Family Planning</h1>
    </header>

    <!-- Navigation Menu -->
    <nav style="margin-left:18%; padding: 10px 0; font-size: 16px;">
        <a href="#" style="margin: 0 10px; color: black; text-decoration: none;">ভ্রমণ</a> •
        <a href="#" style="margin: 0 10px; color: black; text-decoration: none;">সম্পর্ক</a> •
        <a href="#" style="margin: 0 10px; color: black; text-decoration: none;">সুস্থতা</a> •
        <a href="#" style="margin: 0 10px; color: black; text-decoration: none;">রাশি</a> •
        <a href="#" style="margin: 0 10px; color: black; text-decoration: none;">ফ্যাশন</a> •
        <a href="#" style="margin: 0 10px; color: black; text-decoration: none;">রূপচর্চা</a> •
        <a href="#" style="margin: 0 10px; color: black; text-decoration: none;">গ্রহণযজ্ঞ</a> •
        <a href="#" style="margin: 0 10px; color: black; text-decoration: none;">রসনা</a> •
        <a href="#" style="margin: 0 10px; color: black; text-decoration: none;">ফোকাসটা</a>
    </nav>

    <div style="display: flex; margin-left:18%; margin-right:14%;margin-top:10px;">


    <div class="container" style="border-right: 2px solid #ddd; margin-bottom:10px; ">
    <div class="flex-container" >
        <div class="main-news" style="border-right: 2px solid #ddd;">
            <img src="./src/images/exampleImage.avif" alt="News Image" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.002)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h2>বেশি মাংস, বেশি ডিম দেয় নতুন প্রজাতির এই হাঁস</h2>
            <p>৮ ঘন্টা আগে</p>
        </div>
        <div class="side-news">
        <img src="./src/images/exampleImage.avif" alt="News Image" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
        onmouseout="this.style.transform='scale(1)'">
            <h3>ইউরোপে পড়ালেখা এই জনপ্রিয় বৃত্তির সুযোগ কি আপনি নিতে চান</h3>
            <p>৮ ঘন্টা আগে</p>
        </div>
    </div>
    
    <div class="flex-container" style="margin-top:8px;">
        <div class="news-item" style="border-right: 1px solid #ddd;">
            <img src="./src/images/exampleImage.avif" alt="Fashion Show" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>পোশাকে, ফ্যাশনে জন্ম উত্তরের মঞ্চ</h3>
            <p>৫ ঘন্টা আগে</p>
        </div>
        <div class="news-item" style="border-right: 1px solid #ddd;">
            <img src="./src/images/exampleImage.avif" alt="Scientist" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>প্রথম হওয়া সায়েন্স লেখা-কিভাবে কষ্ট স্বার্থক হলো</h3>
            <p>৮ ঘন্টা আগে</p>
        </div>
        <div class="news-item">
            <img src="./src/images/exampleImage.avif" alt="Student" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>এআই ব্যবহার করে লোডশেডিং কমাতে চান আইইউবির শিক্ষার্থী হালিমা</h3>
            <p>৯ ঘন্টা আগে এআই ব্যবহার করে লোডশেডিং কমাতে চান আইইউবির শিক্ষার্থী হালিমা</p>
        </div>
    </div>
    
</div>

<div class="sidebar">

        <img src="./src/images/exampleImage.avif" alt="Scientist" style="padding-bottom:5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
        onmouseout="this.style.transform='scale(1)'">
        <div style="border-bottom: 3px solid #ddd;"></div>
        <h3 >সর্বশেষ</h3>
        <ul >
            <li style="border-bottom: 2px solid #ddd; margin-top:5px; margin-bottom:5px;">লিভারপুলকে হারিয়ে ৭০ বছর পর ইউরোপে 'গ্যালিপ্সি' নিউজকাস্ট</li>
            <li style="border-bottom: 2px solid #ddd;  margin-top:5px; margin-bottom:5px;">নির্বাচন বিভ্রান্তির কারণে জনগণ সঠিক সিদ্ধান্ত নিতে পারছে না</li>
            <li style="border-bottom: 2px solid #ddd;  margin-top:5px; margin-bottom:5px;">নারীদের হারিয়ে 'ব্লুজ' দলের ইনভেস্টমেন্ট বাড়ছে</li>
            <li style="border-bottom: 2px solid #ddd;  margin-top:5px; margin-bottom:5px;">মতামত: 'ধর্ষণ' শাস্তি ডিএমপি কমান্ডারের ভুল দৃষ্টি</li>
            <li>মতামত: 'ধর্ষণ' শাস্তি ডিএমপি কমান্ডারের ভুল দৃষ্টি</li>
        </ul>
    </div>

</div>
    
        </div>

        <div style="border-top: 3px solid #1119f5; margin-left:18%; margin-right:14%;margin-top:10px;">

        </div>







    <div style="margin-left:18%; margin-right:14%;margin-top:10px;">
    <h2>সর্বশেষ খবর</h2>
    </div>

    <div class="swiper mySwiper" style="margin-left:18%; margin-right:14%;margin-top:15px;border-bottom: 2px solid #ddd; padding-bottom:8px;">
    <div class="swiper-wrapper">
        <!-- Slide 1 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 1" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 1 Title</h3>
            <p>Short description of Slide 1.</p>
        </div>
        <!-- Slide 2 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 2" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 2 Title</h3>
            <p>Short description of Slide 2.</p>
        </div>
        <!-- Slide 3 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 3" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 3 Title</h3>
            <p>Short description of Slide 3.</p>
        </div>
        <!-- Slide 4 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 4" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 4 Title</h3>
            <p>Short description of Slide 4.</p>
        </div>
    </div>

    <!-- Pagination & Navigation -->
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
</div>






<div style="border-top: 3px solid #ddd; margin-left:18%; margin-right:14%;margin-top:30px;">

</div>


<div style="margin-left:18%; margin-right:14%;margin-top:10px;">
<h2>আরও খবর</h2>
</div>






 `;
    container.appendChild(card);

    var swiper = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 3, /* Shows 3 slides initially */
        spaceBetween: 10,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 3, /* On tablets, show 3 slides */
            },
            480: {
                slidesPerView: 2, /* On small screens, show 2 slides */
            },
            320: {
                slidesPerView: 1, /* On mobile, show 1 slide */
            }
        }
    });
    
family_planning_card();

}


function family_planning_card(){
    const container = document.getElementById("main-content");
    const card = document.createElement("main-content");
    card.classList.add("card");
    card.innerHTML = `

    <div style="display: flex;flex-direction: column;gap: 20px;align-items: center;margin-left:18%; margin-right:14%;margin-top:30px; padding-left:5%;padding-right:5%;">
        
        <div class="news-item-last">
            <div class="news-text-last">
                <h3 style="margin: 0; color: #000;">ঈদের কেনাকাটায় ৮টি জরুরি সতর্কতা</h3>
                <p style="color: #555; margin: 5px 0;">ঈদের কেনাকাটায় কারণে দোকানপাট ভিড়ে... </p>
                <p style="color: #999; font-size: 14px;">৯ ঘণ্টা আগে</p>
            </div>
            <img src="./src/images/exampleImage.avif" alt="Shopping" style=" border-radius: 5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.07)'" 
            onmouseout="this.style.transform='scale(1)'">
        </div>
        
        <div class="news-item-last">
            <div class="news-text-last">
                <h3 style="margin: 0; color: #000;">বাড়ির ছেলশিশ্টিকে ঠিকভাবে বড় করছেন তো</h3>
                <p style="color: #555; margin: 5px 0;">ছোট থেকে শিশুদের শেখা...</p>
                <p style="color: #999; font-size: 14px;">১২ ঘণ্টা আগে</p>
            </div>
            <img src="./src/images/exampleImage.avif" alt="Education" style="border-radius: 5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.07)'" 
            onmouseout="this.style.transform='scale(1)'">
        </div>
        
        <div class="news-item-last">
            <div class="news-text-last">
                <h3 style="margin: 0; color: #000;">কেমন হলো হামজা-জামালদের নতুন জার্সি</h3>
                <p style="color: #555; margin: 5px 0;">২৫ মার্চে ভারত...</p>
                <p style="color: #999; font-size: 14px;">২৬ ঘণ্টা আগে</p>
            </div>
            <img src="./src/images/exampleImage.avif" alt="Jersey" style=" border-radius: 5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.07)'" 
            onmouseout="this.style.transform='scale(1)'">
        </div>

        <button style="display: block; width: 150px; margin: 20px auto; padding: 10px 15px; font-size: 16px; font-weight: bold; color: white; background: linear-gradient(45deg, #ff6600, #ff3300); border: none; border-radius: 25px; cursor: pointer; transition: all 0.3s ease; box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);">
             Show More
        </button>
        
    </div>

 `;
    container.appendChild(card);



}







function loadContent(page) {
    let content = {

     










//Hospitals page





//Appointments page

        'appointments': `
            <h2>Types of appointments</h2>
            <p>You have a lot of choices for birth control, from condoms to pills. Find the right one for you.</p>
        `,


//Doctor and Specialist page
        'doctor_specialist': `
            <h2>Doctor and Specialist </h2>
            <p>Hormonal birth control includes pills, patches, and injections to prevent pregnancy.</p>
        `,

//Ambulance Booking page
        'ambulance_booking': `
            <h2>ambulance_booking</h2>
            <p>Emergency contraception can prevent pregnancy if you had unprotected</p>
            <p>Natural family planning involves tracking ovulation to prevent pregnancy.</p>
        `,

//Health Camps page
        'health_camps': `
            <h2>Health camps Page</h2>
            <p>Permanent birth control options include vasectomy and tubal ligation.</p>
        `,

//Health Toolkits page

        'health_toolkits': `
            <h2>health_toolkits</h2>
            <p>Permanent birth control options include vasectomy and tubal ligation.</p>
        `,
//Health Insurance page
        'health_insurance': `
            <h2>health_insurance </h2>
            <p>Permanent birth control options include vasectomy and tubal ligation.</p>
        `



,







//Maternal Health page


        'manternal_health': `
            <h2>Maternal Health</h2>
            <p>Maternal health refers</p>
        `,




//baby_care page

        'baby_care': `
            <h2>Baby Care</h2>
            <p>Permanent birth control options include vasectomy and tubal ligation.</p>
        `,


//adolescent_care page
        'adolescent_care': `
            <h2>Adolescent Care</h2>
            <p>Permanent birth control options include vasectomy and tubal ligation.</p>
            `,

//general_healthcare page
        'general_healthcare': `
            <h2>General Healthcare</h2>
            <p>Permanent birth control options include vasectomy and tubal ligation.</p>
            `,

//nutrition_fitness page
        'nutrition_fitness': `
            <h2>Nutrition and Fitness</h2>
            <p>Permanent birth control options include vasectomy and tubal ligation.</p>
            `,

//geriatric_health page

        'geriatric_health': `
            <h2>Geriatric Health</h2>
            <p>Permanent birth control options include vasectomy and tubal ligation.</p>
            `,
//global_health page
        'global_health': `
            <h2>Global Health</h2>
            <p>Permanent birth control options include vasectomy and tubal ligation.</p>
            `,







            'login': `
            <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background: linear-gradient(135deg, #667eea, #764ba2); margin: 0; font-family: Arial, sans-serif;">

        <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.2); width: 100%; max-width: 350px; text-align: center;">
            <h2 style="color: #333;">Login</h2>
    
            <input type="email" placeholder="Email" style="width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 5px; font-size: 16px;">
            
            <input type="password" placeholder="Password" style="width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 5px; font-size: 16px;">
            
            <button style="width: 100%; padding: 10px; background: #667eea; color: white; border: none; border-radius: 5px; font-size: 18px; cursor: pointer;">Login</button>
            
            <div style="margin-top: 15px;">
                <a href="#" style="text-decoration: none; color: #667eea;">Forgot Password?</a>
                <br>
                <a href="#" style="text-decoration: none; color: #764ba2;">Register</a>
            </div>
        </div>
     `,





    };

    document.getElementById('main-content').innerHTML = content[page];
}

loadContenthome()