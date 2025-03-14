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
                    <p>The best birth control is the method you’re most likely to use. Here are some other
                        things to consider as you decide.</p>
                </div>
                <div class="article">
                    <h3><a href="#">How and Where to Get Birth Control</a></h3>
                    <p>You’ve got lots of birth control options. Here’s how to get them, and what to do if costs
                        get in the way.</p>
                </div>
                <div class="article">
                    <h3>Birth Control: How to Talk to Your OB/GYN</h3>
                    <p>If you plan to use birth control other than condoms, you'll need to see a doctor. First,
                        you need to start the conversation.</p>
                </div>
                <div class="article">
                    <h3>How to Talk to Your Partner About Birth Control</h3>
                    <p>Birth control can be an awkward topic. But it’s an important heart-to-heart talk to have
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
                            you’re confident with.</p>
                    </div>
                    <div class="article">
                        <h3>How Effective Are Different Types of Birth Control?</h3>
                        <p>The effectiveness of some birth control methods depends in part on how carefully you use
                            them.</p>
                    </div>
                    <div class="article">
                        <h3>Nonhormonal Birth Control</h3>
                        <p>Nonhormonal birth control is any method that doesn’t affect women’s hormones. But they
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
    card.innerHTML = `<div style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #fff;">

    <!-- Header -->
    <header style="background-color: white; margin-left:20% padding: 15px;">
        <h1 style="color: red; margin-left: 8%; font-size: 36px;">Family Planning</h1>
    </header>

    <!-- Navigation Menu -->
    <nav style="text-align: center; padding: 10px 0; font-size: 16px;">
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

    <!-- Content Section -->
    <div style="display: flex; flex-wrap: wrap; justify-content: center; padding: 20px;">
        
        <!-- Main News -->
        <div style="width: 45%; padding: 10px; position: relative; display: inline-block;">
    <img src="./src/images/exampleImage.avif" alt="কোলোরেক্টাল ক্যানসার" 
         style="display: block; width: 100%; border-radius: 5px; transition: transform 0.3s ease-in-out;"  
         onmouseover="this.style.transform='scale(1.02)'" 
         onmouseout="this.style.transform='scale(1)'">
    
    <!-- Overlay Text -->
    <h2 style="position: absolute; bottom: 10px;
            color: white; padding: 8px 12px; 
               font-size: 18px; border-radius: 5px; text-align: left;">
               দীর্ঘ যাত্রায় কেন নেক পিলো ব্যবহার করবেন
    </h2>
</div>

        <!-- Side News -->
        <div style="width: 22%; padding: 10px;">
            <img src="./src/images/exampleImage.avif" alt="অন্তর্মুখী বনাম বহির্মুখী" style="width: 100%; border-radius: 5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.07)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h2 style="font-size: 18px; margin-top: 10px; color: black;">
                জয়াবর্ধনে-সাঙ্গাকারাদের রেস্তোরাঁর নাম
            </h2>
            <p style="font-size: 14px; color: gray;">০১ মার্চ ২০২৫</p>
            <p style="font-size: 14px; color: #333; line-height: 1.5;">
                রেস্তোরাঁর নাম মিনিস্ট্রি অব ক্র্যাব। সোজা বাংলায় ‘কাঁকড়া মন্ত্রণালয়’।  
            </p>
        </div>

    </div>

</div>
    
    
        </div>

 `;
    container.appendChild(card);
    
family_planning_card();

}


function family_planning_card(){
    const container = document.getElementById("main-content");
    const card = document.createElement("main-content");
    card.classList.add("card");
    card.innerHTML = ` <div style="font-family: Arial, sans-serif; margin-left: 16%;margin-right: 16%; padding: 20px; background-color: #fff;">

    <!-- News Grid Container -->
    <div style="display: flex; flex-wrap: wrap; justify-content: space-between;">

        <!-- News Item 1 -->
        <div style="width: 30%; background: white; padding: 15px; border-radius: 5px; 
                    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); margin-bottom: 20px;">
            <img src="./src/images/exampleImage.avif" alt="Restaurant Image" style="width: 100%; border-radius: 5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.07)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h2 style="font-size: 18px; margin-top: 10px; color: black;">
                জয়াবর্ধনে-সাঙ্গাকারাদের রেস্তোরাঁর নাম
            </h2>
            <p style="font-size: 14px; color: gray;">০১ মার্চ ২০২৫</p>
            <p style="font-size: 14px; color: #333; line-height: 1.5;">
                রেস্তোরাঁর নাম মিনিস্ট্রি অব ক্র্যাব। সোজা বাংলায় ‘কাঁকড়া মন্ত্রণালয়’।  
            </p>
        </div>

        <!-- News Item 2 -->
        <div style="width: 30%; background: white; padding: 15px; border-radius: 5px; 
                    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); margin-bottom: 20px;">
            <img src="./src/images/exampleImage.avif" alt="Travel Image" style="width: 100%; border-radius: 5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.07)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h2 style="font-size: 18px; margin-top: 10px; color: black;">
                দীর্ঘ যাত্রায় কেন নেক পিলো ব্যবহার করবেন
            </h2>
            <p style="font-size: 14px; color: gray;">২২ ফেব্রুয়ারি ২০২৫</p>
            <p style="font-size: 14px; color: #333; line-height: 1.5;">
                ‘ট্রাভেল পিলো’ নামেও এটি পরিচিত। তবে শুধু ভ্রমণের সময় নয়, অনেকেই অফিসে কাজের সময়ও এটি ব্যবহার করেন।
            </p>
        </div>

        <!-- News Item 3 -->
        <div style="width: 30%; background: white; padding: 15px; border-radius: 5px; 
                    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); margin-bottom: 20px;">
            <img src="./src/images/exampleImage.avif" alt="Hiking Image" style="width: 100%; border-radius: 5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.07)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h2 style="font-size: 18px; margin-top: 10px; color: black;">
                কক্সবাজার থেকে হেঁটে এভারেস্ট জয় করতে যাবেন শাকিল
            </h2>
            <p style="font-size: 14px; color: gray;">০৮ ফেব্রুয়ারি ২০২৫</p>
            <p style="font-size: 14px; color: #333; line-height: 1.5;">
                ‘গ্রেট হিমালয়া ট্রেইল’ নামে পরিচিত নেপালের পূর্ব থেকে পশ্চিমে ১ হাজার ৭০০ কিলোমিটারের দুর্গম পথ।
            </p>
        </div>

    </div>
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