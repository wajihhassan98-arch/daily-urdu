const DECKS = {
  vocab: {
    name: "Lesson vocabulary",
    urdu: "الفاظ",
    cards: [
      ["Peela", "Yellow"],
      ["Laal", "Red"],
      ["Sasta", "Cheap"],
      ["Koi", "Any"],
      ["Dair se", "Late"],
      ["Kyun keh", "Because (action first, then reason)"],
      ["Is liye", "Therefore (reason first, then action)"],
      ["Pehen", "Wear"],
      ["Mere liye", "For me"],
      ["Apne liye", "For myself"],
      ["Kahin", "Anywhere"],
      ["Poora din", "All day"],
      ["Bhi", "Also"],
      ["Muft", "Free"],
      ["Sukoon", "Peace"],
      ["Purana", "Old"],
      ["Gali", "Street"],
      ["Deewar", "Wall"],
      ["Aakhir mein", "At the end"],
      ["Shor", "Noise"],
      ["Shor karna", "To make noise"],
      ["Guzarna", "To pass"],
      ["Tang karna", "To annoy"],
      ["Kabhi nahi", "Never"],
      ["Aik dafa", "Once"],
      ["Pehli dafa / pehli baar", "First time"],
      ["Keh", "That (connector)"],
      ["Wapas", "Back / to return"],
      ["Mila", "Received"],
      ["Doosri taraf", "Other side"],
      ["Kaan mein kehna", "To whisper"],
      ["Bewaqoof", "Fool"],
      ["Bhaag", "Run"],
      ["Bhool", "Forget"],
      ["Magarmach", "Crocodile"],
      ["Aaram se", "Calmly"],
      ["Wazni / bhaari", "Heavy"],
      ["Seekh", "Learn"],
      ["Rishtedaar", "Relatives / family"],
      ["Sooj", "Swell"],
      ["Toot", "Broke / shattered"],
      ["Bahana", "Excuse"],
      ["Bahana banana", "Making excuses"],
      ["Beemar", "Sick"],
      ["Seedha", "Straight"],
      ["Hairan", "Shocked"],
      ["Kam se kam", "At least"],
      ["Sun", "Listen"],
      ["Is ke bajaye", "Instead of this"],
      ["Taaza", "Fresh"],
      ["Jaldi", "Early / quickly"],
      ["Barhta", "Increase"],
      ["Dilchasp", "Interesting"],
      ["Is ke darmiyan", "In between"],
      ["Itna", "That much"],
      ["Tabdeel", "Change"],
      ["Kayi", "Several"],
      ["Khirki", "Window"],
      ["Band kar", "Close"],
      ["Khul", "Open"],
      ["Sham ko", "In the evening"],
      ["Paise", "Money"],
      ["Bhejna", "To send"],
      ["Jaag", "Wake / awake"],
      ["Intezaar", "Wait"],
      ["Aadat ho gayi hai", "Used to it (it's become a habit)"],
      ["Kuch gadbad hai", "Something's not right"],
      ["Jaise hi", "As soon as"],
      ["Jab keh", "While"],
      ["Jab", "When"],
      ["Is dauraan", "During this time"],
      ["Agarche", "Although"],
      ["Bacha hua", "Left over / remaining"],
      ["Chahiye", "Should (present)"],
      ["Chahiye tha", "Should have (past)"],
    ],
  },
  everyday: {
    name: "Everyday & travel",
    urdu: "روزمرہ",
    cards: [
      ["Kya", "What"],
      ["Kaun", "Who"],
      ["Kahan", "Where"],
      ["Kab", "When"],
      ["Kyun", "Why"],
      ["Kaise", "How"],
      ["Kitna", "How much / how many"],
      ["Kaun sa", "Which one"],
      ["Aaj", "Today"],
      ["Kal", "Yesterday / tomorrow (context decides)"],
      ["Parson", "Day before yesterday / day after tomorrow"],
      ["Subah", "Morning"],
      ["Dopahar", "Afternoon"],
      ["Raat", "Night"],
      ["Abhi", "Right now"],
      ["Baad mein", "Later"],
      ["Pehle", "Before / first"],
      ["Hamesha", "Always"],
      ["Aksar", "Often"],
      ["Kabhi kabhi", "Sometimes"],
      ["Khareedna", "To buy"],
      ["Bechna", "To sell"],
      ["Milna", "To meet / to get"],
      ["Samajhna", "To understand"],
      ["Bataana", "To tell"],
      ["Poochna", "To ask"],
      ["Madad karna", "To help"],
      ["Sochna", "To think"],
      ["Yaad rakhna", "To remember"],
      ["Bhoolna", "To forget"],
      ["Naya", "New (opposite of purana)"],
      ["Mehenga", "Expensive (opposite of sasta)"],
      ["Mushkil", "Difficult"],
      ["Aasaan", "Easy"],
      ["Nazdeek / qareeb", "Near"],
      ["Door", "Far"],
      ["Bayen", "Left"],
      ["Dayen", "Right"],
      ["Garam", "Hot"],
      ["Thanda", "Cold"],
      ["Mazedar", "Delicious"],
      ["Bhook lagi hai", "I'm hungry"],
      ["Pyaas lagi hai", "I'm thirsty"],
      ["Thakan", "Tiredness / fatigue"],
      ["Yeh kitne ka hai?", "How much is this?"],
      ["Thora kam karein", "Reduce it a little (bargaining)"],
      ["Zaroor", "Definitely / of course"],
      ["Shayad", "Maybe"],
      ["Bilkul", "Absolutely / exactly"],
      ["Koi baat nahi", "No problem / it's okay"],
    ],
  },
  family: {
    name: "Family talk",
    urdu: "گھر والوں سے باتیں",
    cards: [
      ["How are you? (respectful, to elders)", "Aap kaise hain? / Aap kaisi hain?"],
      ["Is everything well?", "Sab khairiyat hai?"],
      ["I'm fine, by God's grace", "Mai theek hu, Allah ka shukar hai"],
      ["How is your health?", "Aap ki tabiyat kaisi hai?"],
      ["How is Ami / how is everyone at home?", "Ami kaisi hain? Ghar mein sab kaise hain?"],
      ["What's going on? / What's new?", "Kya chal raha hai? / Kya ho raha hai?"],
      ["Nothing much, just busy with work", "Bas, kaam mein masroof hu"],
      ["How is work going?", "Kaam kaisa chal raha hai?"],
      ["Have you eaten?", "Khana khaya? / Aap ne khana kha lia?"],
      ["Yes, I just ate", "Ji haan, abhi khaya hai"],
      ["Enough about me — tell me about you", "Mera chorein, aap sunayein"],
      ["I miss you (to elders)", "Mujhe aap ki bahot yaad aati hai"],
      ["We miss you a lot too", "Humein bhi aap ki bahot yaad aati hai"],
      ["It was so good talking to you", "Aap se baat kar ke bahot khushi hui"],
      ["When are you coming to Pakistan?", "Aap Pakistan kab aa rahe hain?"],
      ["I'm coming this winter, God willing", "Inshallah, is sardi mein aa raha hu"],
      ["How are the kids?", "Bachay kaise hain?"],
      ["Give my salaam to everyone", "Sab ko mera salaam kehna"],
      ["Please pray for me", "Meri liye dua karein"],
      ["You are always in my prayers", "Aap hamesha meri duaon mein hain"],
      ["I can't hear you (on the phone)", "Awaaz nahi aa rahi"],
      ["Can you hear me now?", "Ab awaaz aa rahi hai?"],
      ["The call keeps dropping", "Call baar baar kat rahi hai"],
      ["I'll call you back later", "Mai aap ko baad mein call karta hu"],
      ["Put Ami on the phone", "Ami se baat karwayein"],
      ["Talk to you soon", "Jaldi baat hogi"],
      ["Okay, I'll hang up now — Khuda hafiz", "Acha, ab rakhta hu — Khuda hafiz"],
      ["What did you cook today?", "Aaj kya pakaya?"],
      ["The weather is very nice here", "Yahan mausam bahot acha hai"],
      ["It's very cold / hot here", "Yahan bahot sardi / garmi hai"],
      ["Sorry, I don't speak Urdu well", "Maaf karein, meri Urdu itni achi nahi hai"],
      ["But I'm learning!", "Laykin mai seekh raha hu!"],
      ["Say that again, slowly", "Dobara boliye, aaram se"],
      ["What does that mean?", "Is ka kya matlab hai?"],
      ["I understood!", "Mai samajh gaya!"],
      ["Congratulations!", "Mubarak ho!"],
      ["May God keep you happy (blessing)", "Allah aap ko khush rakhe"],
      ["Take care of yourself", "Apna khayal rakhna / rakhiye ga"],
      ["Don't worry", "Fikar na karein / pareshan na hon"],
      ["I'll definitely come next time", "Agli baar mai zaroor aaonga"],
      ["Come, food is ready", "Aayein, khana tayyar hai"],
      ["Eat a little more! (what every aunty says)", "Thora aur khao!"],
      ["I'm full, honestly", "Mera pait bhar gaya, sach mein"],
      ["It was delicious, you cooked so well", "Bahot mazedar tha, aap ne bahot acha pakaya"],
    ],
  },
  casual: {
    name: "Casual (cousins & friends)",
    urdu: "بےتکلف باتیں",
    cards: [
      ["What's up? / how's it going?", "Kya haal hai? / Aur sunao?"],
      ["How are you? (peer, casual)", "Kaise ho?"],
      ["I'm good — you tell me", "Theek hu, tum sunao"],
      ["What are you up to?", "Kya kar rahe ho?"],
      ["Nothing much", "Kuch khaas nahi"],
      ["Where are you?", "Kahan ho?"],
      ["I'm on my way", "Bas nikal raha hu / raaste mein hu"],
      ["Hold on a sec", "Aik minute ruko"],
      ["Are you coming or not?", "Aa rahe ho ya nahi?"],
      ["I'll call you back", "Mai tumhe call karta hu"],
      ["Did you eat?", "Khana khaya?"],
      ["I'm starving, man", "Bhook lag rahi hai yaar"],
      ["It's so hot today", "Aaj bahot garmi hai yaar"],
      ["Are you serious?", "Sach mein? / Sachi?"],
      ["No way!", "Arey nahi yaar!"],
      ["That's wild", "Kamaal hai"],
      ["That was so funny", "Bara mazaa aya"],
      ["I'm just messing with you", "Mazaak kar raha hu"],
      ["Don't be mad", "Naraz mat ho"],
      ["My bad", "Meri galti, sorry yaar"],
      ["It happens", "Hota hai"],
      ["Forget it / drop it", "Chor do / rehne do"],
      ["Let me know", "Bata dena"],
      ["Text me", "Message kar dena"],
      ["Send it to me", "Bhej do mujhe"],
      ["I'm so tired", "Thak gaya hu"],
      ["I'm bored", "Bore ho raha hu"],
      ["I don't feel like it", "Dil nahi kar raha"],
      ["Let's hang out", "Milte hain"],
      ["When are you free?", "Kab free ho?"],
      ["Hurry up", "Jaldi karo"],
      ["What happened?", "Kya hua?"],
      ["It's fine, don't stress", "Theek hai, fikar mat karo"],
      ["I forgot", "Bhool gaya"],
      ["I'll do it later", "Baad mein kar loonga"],
      ["I told you so", "Mai ne bola tha na"],
      ["Whatever", "Jo bhi"],
      ["Exactly!", "Bilkul!"],
      ["Come on, let's go", "Arey chalo bhi"],
      ["Slow down, say it again", "Aaram se yaar, phir se bolo"],
      ["Alright, later", "Chalo phir, baad mein baat karte hain"],
    ],
  },
  natural: {
    name: "Sound natural",
    urdu: "بول چال",
    cards: [
      ["Ji", "Yes / polite acknowledgment — add to almost anything when talking to elders"],
      ["Ji haan / Ji nahi", "Yes / no (respectful)"],
      ["Acha", "Oh / okay / I see — the all-purpose response. Tone changes the meaning"],
      ["Acha?!", "Really?! (surprised)"],
      ["Haan ji", "Yes? / go on / I'm listening"],
      ["Matlab", "I mean... / meaning (filler while you think)"],
      ["Waise", "By the way / anyway"],
      ["Chalo", "Okay then / let's go / fine (moving the conversation along)"],
      ["Chalein?", "Shall we? / ready to go?"],
      ["Arey wah!", "Wow! / nice!"],
      ["Mashallah", "Said when praising — kids, health, achievements, food"],
      ["Inshallah", "God willing — attach to any future plan"],
      ["Alhamdulillah", "Thank God — the answer to 'how are you'"],
      ["Kher", "Anyway / well... (transitioning topics)"],
      ["Bas", "That's it / just / enough — 'bas, theek hu' = I'm just fine"],
      ["Yaar", "Dude / man (casual — cousins yes, elders no)"],
      ["Na", "Right? / tag at end — 'acha hai na?' = it's good, right?"],
      ["Toh / tu", "So / then (connector)"],
      ["Suno / suniye", "Listen (casual / respectful) — how you start a request"],
      ["Dekho / dekhiye", "Look... (starting an explanation)"],
      ["Pata hai?", "You know? / guess what?"],
      ["Mujhe nahi pata", "I don't know"],
      ["Ho sakta hai", "Could be / maybe"],
      ["Sach mein?", "Really? / seriously?"],
      ["Wallah / Allah kasam", "I swear (emphatic)"],
      ["Kya baat hai!", "Amazing! / well said! (praise)"],
      ["Koi nahi", "No worries (casual koi baat nahi)"],
      ["Rehne do", "Let it be / forget it"],
      ["Aur batao", "So, what else? (keeps conversation going — use this constantly)"],
      ["Aur sunao", "Same as aur batao — tell me more"],
      ["Theek hai", "Okay / fine / alright"],
      ["Zabardast", "Awesome / fantastic"],
      ["Afsos", "That's sad / what a pity"],
      ["Hai na?", "Isn't it? (seeking agreement)"],
      ["Kyun?", "Why? — also 'kyun bhai?' = what's up with you?"],
      ["Bilkul theek", "Absolutely right"],
      ["Thora thora", "A little bit — the answer to 'do you speak Urdu?'"],
    ],
  },
  chatread: {
    name: "Reading the group chat",
    urdu: "چیٹ پڑھنا",
    cards: [
      ["boht / bht / bohat / bohot", "All spellings of BAHUT — very, a lot. The most-typed word in the chat."],
      ["he / hay / ha", "All hai — is. Context tells you which."],
      ["hein / hen", "hain — are (plural/respectful)"],
      ["nae / nai / nahin", "nahi — no, not"],
      ["ker / kr", "kar — do"],
      ["k / kay", "ke — of / possessive linker"],
      ["tou / toh", "to — so, then"],
      ["me / mei / mai", "mein — in. Careful: 'mai' can also mean I"],
      ["app / ap", "aap — you (respectful)"],
      ["kia / kiya", "kya — what"],
      ["or", "aur — and. Not the English 'or'!"],
      ["sub", "sab — all, everyone"],
      ["jee", "ji — yes / polite marker"],
      ["kasey / kese", "kaise — how"],
      ["hogaya / hogya / hojae ga", "ho gaya (happened) / ho jayega (will happen)"],
      ["gya", "gaya — went / already happened"],
      ["Aoa / Asslamualikum", "Assalamu alaikum — the standard greeting, endlessly abbreviated"],
      ["ameen", "Ameen — said after any dua someone posts"],
      ["Alhamdulilah", "Alhamdulillah — thank God. The normal answer to 'how are you'"],
      ["MashAllah / Mashallah", "Said when praising anything — a baby, a photo, good news"],
      ["InshAllah", "God willing — attached to anything about the future"],
      ["JazakAllah", "Thank you (religious register), common from elders"],
    ],
  },
  chatphrases: {
    name: "Family chat phrases",
    urdu: "خاندانی باتیں",
    cards: [
      ["How is Ami? / How is everyone?", "Ami kaise hain? / Sab kaise hain?"],
      ["How are you, Asif bhai?", "Asif bhai kaise hain?"],
      ["Hi everyone, what's the news?", "Assalamu alaikum, kya haal hai?"],
      ["Quiet from the America people, huh?", "America walon, bari khamoshi hai?"],
      ["Everything's fine, thank God", "Alhamdulillah sab theek hai"],
      ["It'll all be fine, God willing", "Inshallah sab theek ho jayega"],
      ["Everyone's prayers are with them", "Sab duaein un ke sath hain"],
      ["Send the home address", "Ghar ka address bhejo"],
      ["Send me a picture", "Mujhe picture bhejo"],
      ["Come in November", "Tum November mein aa jao"],
      ["I'm coming too", "Mai bhi aa raha hu"],
      ["I might come too", "Mai bhi shayad aaon"],
      ["Where are you?", "Kahan ho?"],
      ["Who is this?", "Ye kaun hai?"],
      ["What happened to them?", "Unko kya hua hai?"],
      ["Who's with them?", "Un ke paas kaun hai?"],
      ["We'll talk later", "Baatein baad mein karte hain"],
      ["I want to talk to you on a call too", "Aap se bhi call par baat karni hai"],
      ["Tell me when you're free", "Jab free hon to batana"],
      ["Congratulations!", "Mubarak ho!"],
      ["Congratulations, so much!", "Bohot bohot mubarak ho!"],
      ["(The reply to Mubarak ho)", "Khair mubarak!"],
      ["Eid Mubarak, everyone", "Sab ko Eid Mubarak"],
      ["Eid money (what kids demand)", "Eidi"],
      ["You'll give me eidi, right?", "Eidi to do ge na?"],
      ["It's their first Eid", "Is ki pehli Eid hai"],
      ["Oh I see", "Oh acha"],
      ["Really?", "Sach mein?"],
      ["Wow, amazing!", "Kya baat hai!"],
      ["Exactly right", "Bilkul sahi / Sahi baat hai"],
      ["This is so fun to watch", "Dekh kar maza aata hai"],
      ["That was great", "Maza aa gaya"],
      ["Wasn't it? Me too", "Hai na? Mujhe bhi"],
      ["I thought so too", "Mujhe bhi aisa hi laga"],
      ["Didn't even tell me", "Btaya bhi nahi"],
      ["Didn't even invite me", "Bulaya bhi nahi"],
      ["You be quiet", "Tum chup"],
      ["Both of you, quiet", "Tum dono khamosh"],
      ["Has she no shame", "Sharam nahi aati isay"],
      ["Stop dreaming and go to sleep", "Khwab dekhna band karo aur so jao"],
      ["He can't even handle being complimented", "Isko apni tareef bhi hazm nahi hoti"],
      ["First time he's said something good", "Pehli dafa kuch acha bola hai"],
      ["Poor guy", "Bechara"],
      ["He looks just like his mom", "Ami ki tarah lagta hai"],
      ["Say salaam to Qazi sahib", "Qazi sahib ko salaam"],
      ["Send lots of love to mamoo", "Mamoo ko bohot pyar dena"],
      ["We're not going below LV (joking)", "LV se neeche nahi aana"],
      ["The colour is a little different", "Color thora different hai"],
      ["Yours are exactly the same", "Aap ke bilkul same hain"],
    ],
  },
  grammar: {
    name: "Grammar rules",
    urdu: "قواعد",
    cards: [
      [
        "When do you use LIA / LI?",
        "When you did something for yourself or your own benefit.\n\nMai ne khana kha lia — I already ate.",
      ],
      [
        "When do you use DIA / DI?",
        "When you did something for others.\n\nMai ne kitchen saaf kar di — I cleaned the kitchen (for Mom).",
      ],
      [
        "When do you use GAYA / GAI / GAYE?",
        "With intransitive verbs (so, aa, ja, ho, bhool, jaag, uth, mil, khul, toot...) to say it already happened.\n\nGym khul gaya — the gym opened.\nAmi so gayi hain — Mom has slept.",
      ],
      [
        "Can you use lia / dia in negative sentences?",
        "No! Use plain past with 'abhi tak nahi'.\n\nJohn ne khana kha lia, laykin mai ne abhi tak nahi khaya.",
      ],
      [
        "Which gaya-verbs always take GAI?",
        "Forgetting: bhool gai.\nAnd questions are always feminine: kia dawai mil gai?",
      ],
      [
        "Past tense with 'ne' — what does the verb agree with?",
        "The verb agrees with the OBJECT in number and gender, and the subject is marked with 'ne'.\n\nMai ne biryani (f) khai.",
      ],
      [
        "How do you make the feminine past form?",
        "Add 'i' to the verb root.\n\nKha → khai, dekh → dekhi, bana → banai, seekh → seekhi.\nSpecial: kar → ki (did).",
      ],
      [
        "How do you make an infinitive (to ___)?",
        "Add -na to the root.\n\nKhool → khoolna (to open), bana → banana (to make), band kar → band karna (to close).",
      ],
      [
        "Pattern for 'trying to do X'?",
        "[verb]-ne ki koshish kar.\n\nMai bottle khoolne ki koshish kar raha hu — I'm trying to open the bottle.",
      ],
      [
        "Pattern for 'waiting for X'?",
        "[X] ka intezaar kar.\n\nMai aap ka intezaar kar raha hu — I'm waiting for you.",
      ],
      [
        "Past conditional structure (agar / tu)?",
        "Agar + simple form (jata/jati, no helping verb) ... tu + simple form.\n\nAgar mai jaldi uthta, tu mai nashta ghar par khata.",
      ],
      [
        "Negation inside conditionals?",
        "Use 'na' instead of 'nahi'.\n\nAgar covid na hota, tu mai Pakistan jata.",
      ],
      [
        "HUAY — use 1 of 3?",
        "Main past verb: became / were / happened.\n\nWoh raazi huay — they agreed.\nHum tayyar huay — we got ready.",
      ],
      [
        "HUAY — use 2 of 3?",
        "Participle: 'while doing' or 'in a state of'.\n\nWoh rote huay boli — she spoke while crying.\nBache bhaagte huay aaye — the kids came running.",
      ],
      [
        "HUAY — use 3 of 3?",
        "Elapsed time: ago / time passed.\n\nDo din huay — two days ago.\nKaafi saal huay — many years ago.",
      ],
      [
        "When asking a question about the past, which gender?",
        "Always use masculine when asking the question.",
      ],
      [
        "What does KO mark?",
        "The receiver or target — 'to / for'.\n\nMai ne Sarah KO call ki — I called Sarah.\nSham KO — in the evening (time).",
      ],
      [
        "What does SE mark?",
        "'From' or 'with (a tool/manner)'.\n\nAbdullah aunty SE pyar karta tha.\nAaram SE — calmly.",
      ],
      [
        "MEIN vs PAR?",
        "Mein = in / inside. Par = on / at.\n\nGhar MEIN — in the house.\nSeat PAR — on the seat.",
      ],
      [
        "When do you use APNA?",
        "'One's own' — when the owner is the subject of the sentence.\n\nKia aap ne APNA homework kar lia? — Did you do your (own) homework?",
      ],
      [
        "Alternative to gaya for 'already finished': CHUKA?",
        "Chuka / chuki / chukay = completed.\n\nAik saal ho CHUKA hai — a full year has passed.\nMai kha CHUKA hu — I have already eaten.",
      ],
      [
        "How do you politely command / request?",
        "Root + -iye (or -ein).\n\nBoliye — please speak. Baithiye — please sit.\nAaram se boliye — please speak slowly.",
      ],
      [
        "AAP vs TUM — who gets which?",
        "Aap: parents, aunts/uncles, anyone older, anyone you just met.\nTum: cousins your age or younger, siblings, close friends.\n\nWhen unsure, use aap. Nobody is offended by aap.",
      ],
      [
        "Same sentence in aap vs tum?",
        "Aap kaise hain? → Tum kaise ho?\nAap ne khana khaya? → Tum ne khana khaya?\nBoliye → Bolo.\nAaiye → Aao.\n\nTum forms end in -o, aap forms in -iye / hain.",
      ],
      [
        "How do you make Urdu sound casual, not textbook?",
        "Drop the extra words and add fillers.\n\nTextbook: Mai theek hu, shukriya.\nReal: Bas, theek hu — aur sunao?\n\n'Bas', 'yaar', 'acha', 'arey', 'na' at the end do most of the work.",
      ],
      [
        "Casual softeners at the end of a sentence?",
        "Yaar (dude), na (right?), bhi (come on).\n\nChalo yaar. Acha hai na? Arey chalo bhi.",
      ],
    ],
  },
  sentences: {
    name: "Sentence practice",
    urdu: "جملے",
    cards: [
      ["I ate biryani", "Mai ne biryani khai"],
      ["I watched a movie with Ali", "Mai ne Ali ke sath movie dekhi"],
      [
        "On Sunday, my mom and I watched a movie at Aunty's house",
        "Sunday ko, mai aur meri Ami ne Aunty ke ghar mein movie dekhi",
      ],
      [
        "Yesterday my mom made curry for dinner",
        "Kal meri Ami ne dinner ke liye curry banai",
      ],
      ["I already ate dinner", "Mai ne khana kha lia"],
      ["I already finished my homework", "Mai ne homework khatam kar lia"],
      [
        "I already cleaned the kitchen (for Mom)",
        "Mai ne kitchen saaf kar di",
      ],
      [
        "I made your presentation (for Mayra)",
        "Mai ne aap ki presentation bana di",
      ],
      ["Mom has already slept", "Ami so gayi hain"],
      [
        "Mom is awake but father has slept",
        "Ami abhi jaag rahi hain, laykin Abu so gaye hain",
      ],
      ["The gym opened", "Gym khul gaya"],
      [
        "John already ate dinner but I haven't eaten yet",
        "John ne khana kha lia, laykin mai ne abhi tak nahi khaya",
      ],
      ["Did you close the window?", "Kia aap ne khirki band ki?"],
      ["She spoke while crying", "Woh rote huay boli"],
      ["The children came running", "Bache bhaagte huay aaye"],
      ["Two days ago / two days have passed", "Do din huay"],
      [
        "If I woke up early, I would have eaten breakfast at home",
        "Agar mai jaldi uthta, tu mai nashta ghar par khata",
      ],
      [
        "If covid hadn't happened, I would have gone to Pakistan",
        "Agar covid na hota, tu mai Pakistan jata",
      ],
      [
        "If I were in Pakistan, my Urdu would be very good",
        "Agar mai Pakistan mein hota, tu meri Urdu bahot achi hoti",
      ],
      [
        "If there had been leftover food, we wouldn't have ordered pizza",
        "Agar bacha hua khana hota, tu hum pizza na mangwatay",
      ],
      [
        "I am trying to open the bottle",
        "Mai bottle khoolne ki koshish kar raha hu",
      ],
      [
        "She will try to call you in the evening",
        "Sham ko woh call karne ki koshish kare gi",
      ],
      [
        "I tried to call Sarah but her phone was off",
        "Mai ne Sarah ko call karne ki koshish ki, laykin us ka phone band tha",
      ],
      [
        "I was trying to send you money",
        "Mai aap ko paise bhejne ki koshish kar raha tha",
      ],
      ["I will try", "Mai koshish karoon ga"],
      ["I am waiting for you", "Mai aap ka intezaar kar raha hu"],
      [
        "At the end of the street there was an old house",
        "Gali ke aakhir mein aik purana ghar tha",
      ],
      ["Whose wall was yellow", "Jis ki deewar peeli thi"],
      [
        "An old woman lived there alone",
        "Wahan aik boorhi aurat akeli rehti thi",
      ],
      [
        "Every time something or other happens",
        "Har dafa kuch na kuch hota hai",
      ],
      ["Don't you think...?", "Aap ko nahi lagta...?"],
      ["Something's not right", "Kuch gadbad hai"],
      ["How much is this?", "Yeh kitne ka hai?"],
      [
        "It's very expensive — reduce it a little",
        "Yeh bahot mehenga hai — thora kam karein",
      ],
      ["I don't understand", "Mujhe samajh nahi aaya"],
      ["Please speak slowly", "Aaram se boliye"],
      ["The food was delicious", "Khana bahot mazedar tha"],
      ["Where is the bathroom?", "Bathroom kahan hai?"],
      [
        "As soon as I got home, I called Mom",
        "Jaise hi mai ghar pohncha, mai ne Ami ko call ki",
      ],
      [
        "I have already eaten (chuka form)",
        "Mai kha chuka hu",
      ],
      [
        "It's been a year since we moved to the new house",
        "Humein naye ghar mein muntaqil huay poora aik saal ho chuka hai",
      ],
    ],
  },
};

// ---------- SENTENCE OF THE DAY ----------
const SOTD_PROMPTS = [
  {
    target: "lia — did for yourself",
    en: "I already bought the tickets.",
    ur: "Mai ne ticket khareed li / khareed lia",
    hint: "ne + verb root + lia/li",
  },
  {
    target: "dia — did for others",
    en: "I sent you the money (for you).",
    ur: "Mai ne aap ko paise bhej diye",
    hint: "doing it for someone else → dia/di/diye",
  },
  {
    target: "gaya — intransitive, already happened",
    en: "The shop closed.",
    ur: "Dukaan band ho gayi",
    hint: "dukaan is feminine → gai",
  },
  {
    target: "feminine past (root + i)",
    en: "I cooked biryani yesterday.",
    ur: "Kal mai ne biryani pakai",
    hint: "biryani is feminine → paka + i",
  },
  {
    target: "huay — while doing",
    en: "He left the house while laughing.",
    ur: "Woh hanste huay ghar se gaya",
    hint: "verb-te + huay",
  },
  {
    target: "huay — elapsed time",
    en: "It's been three months since I met my friend.",
    ur: "Mujhe apne dost se mile huay teen maah ho gaye hain",
    hint: "time phrase + huay",
  },
  {
    target: "agar / tu — past conditional",
    en: "If it hadn't rained, I would have gone to the gym.",
    ur: "Agar barish na hoti, tu mai gym jata",
    hint: "simple form, no helping verb; na not nahi",
  },
  {
    target: "koshish — trying to",
    en: "I am trying to learn Urdu.",
    ur: "Mai Urdu seekhne ki koshish kar raha hu",
    hint: "verb-ne ki koshish kar",
  },
  {
    target: "intezaar — waiting for",
    en: "We are waiting for the bus.",
    ur: "Hum bus ka intezaar kar rahe hain",
    hint: "X ka intezaar kar",
  },
  {
    target: "negatives — no lia/dia",
    en: "She already ate, but I haven't eaten yet.",
    ur: "Us ne khana kha lia, laykin mai ne abhi tak nahi khaya",
    hint: "'abhi tak nahi' + plain past",
  },
  {
    target: "ne + object agreement",
    en: "Did you watch the movie?",
    ur: "Kia aap ne movie dekhi?",
    hint: "movie is feminine → dekhi",
  },
  {
    target: "infinitive (-na)",
    en: "I want to learn to cook.",
    ur: "Mai khana pakana seekhna chahta hu",
    hint: "root + na",
  },
  {
    target: "chahiye tha — should have",
    en: "I should have slept early.",
    ur: "Mujhe jaldi sona chahiye tha",
    hint: "mujhe + infinitive + chahiye tha",
  },
  {
    target: "jaise hi — as soon as",
    en: "As soon as father entered the house, the kids ran to him.",
    ur: "Jaise hi Abu ghar mein daakhil huay, bache un ki taraf bhaage",
    hint: "jaise hi + past clause",
  },
  {
    target: "family call — opening",
    en: "How are you? Is everything well at home?",
    ur: "Aap kaise hain? Ghar mein sab khairiyat hai?",
    hint: "respectful aap forms with elders",
  },
  {
    target: "family call — sharing your news",
    en: "Work is going well, I'm just a little busy these days.",
    ur: "Kaam acha chal raha hai, bas aaj kal thora masroof hu",
    hint: "bas + aaj kal soften it naturally",
  },
  {
    target: "family call — asking back",
    en: "Enough about me — you tell me, what's new?",
    ur: "Mera chorein — aap sunayein, kya chal raha hai?",
    hint: "'aur sunayein' keeps the conversation going",
  },
  {
    target: "future plans with inshallah",
    en: "God willing, I will come to Pakistan this winter.",
    ur: "Inshallah, mai is sardi mein Pakistan aaonga",
    hint: "inshallah + future (-onga/-ongi)",
  },
  {
    target: "family call — closing",
    en: "It was lovely talking to you. Give my salaam to everyone.",
    ur: "Aap se baat kar ke bahot khushi hui. Sab ko mera salaam kehna",
    hint: "the standard warm sign-off",
  },
  {
    target: "group chat — congratulating",
    en: "Congratulations! So happy to hear it.",
    ur: "Bohot bohot mubarak ho! Sun kar bohot khushi hui",
    hint: "reply to someone else's mubarak ho is 'khair mubarak'",
  },
  {
    target: "group chat — checking in",
    en: "How is everyone? It's been quiet here.",
    ur: "Sab kaise hain? Yahan bari khamoshi hai",
    hint: "the standard nudge when the group goes silent",
  },
  {
    target: "group chat — making plans",
    en: "Come in November, we'll all meet up.",
    ur: "November mein aa jao, hum sab miltay hain",
    hint: "aa jao = casual imperative to peers",
  },
  {
    target: "group chat — reacting to photos",
    en: "Mashallah, so lovely — it's fun to see.",
    ur: "Mashallah bohot khoob — dekh kar maza aata hai",
    hint: "mashallah before praising, always",
  },
  {
    target: "asking for help mid-conversation",
    en: "Say that again slowly — I'm still learning Urdu.",
    ur: "Dobara aaram se boliye — mai abhi Urdu seekh raha hu",
    hint: "-iye polite command",
  },
];
// ---------- STORAGE ----------
// ---------- SPEAKER GENDER ----------
// Urdu inflects the verb for the speaker's own gender in the present, future,
// habitual and intransitive past. Cards are written male by default; these are
// the female forms. Only cards where the SPEAKER is the subject appear here —
// "Gym khul gaya" (gym is masculine) and "Aap kaise/kaisi hain" (about the
// listener) are deliberately untouched.
const FEM_FORMS = {
  family: {
    15: "Inshallah, mai is sardi mein aa rahi hu",
    23: "Mai aap ko baad mein call karti hu",
    31: "Laykin mai seekh rahi hu!",
    34: "Mai samajh gai!",
    39: "Agli baar mai zaroor aaongi",
  },
  casual: {
    6: "Bas nikal rahi hu / raaste mein hu",
    9: "Mai tumhe call karti hu",
    17: "Mazaak kar rahi hu",
    25: "Thak gai hu",
    26: "Bore ho rahi hu",
    33: "Bhool gai",
    34: "Baad mein kar loongi",
  },
  chatphrases: {
    10: "Mai bhi aa rahi hu",
  },
  sentences: {
    16: "Agar mai jaldi uthti, tu mai nashta ghar par khati",
    17: "Agar covid na hota, tu mai Pakistan jati",
    18: "Agar mai Pakistan mein hoti, tu meri Urdu bahot achi hoti",
    20: "Mai bottle khoolne ki koshish kar rahi hu",
    23: "Mai aap ko paise bhejne ki koshish kar rahi thi",
    24: "Mai koshish karoon gi",
    25: "Mai aap ka intezaar kar rahi hu",
    38: "Jaise hi mai ghar pohnchi, mai ne Ami ko call ki",
  },
};

let speakerFem = localStorage.getItem("urdu-speaker") === "f";

// Returns the card with the Urdu side swapped to the speaker's forms.
function getCard(deckKey, i) {
  const c = DECKS[deckKey].cards[i];
  if (!speakerFem) return c;
  const alt = FEM_FORMS[deckKey] && FEM_FORMS[deckKey][i];
  return alt ? [c[0], alt] : c;
}

const STORAGE_KEY = "urdu-flashcards-v1";

const emptyProgress = () => {
  const p = { streak: { lastDay: null, count: 0 }, sotd: {} };
  Object.keys(DECKS).forEach((k) => (p[k] = {}));
  return p;
};

let progress = emptyProgress();

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) progress = Object.assign(emptyProgress(), JSON.parse(raw));
  } catch (e) {
    console.error("load failed", e);
  }
}

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    return true;
  } catch (e) {
    console.error("save failed", e);
    return false;
  }
}

// ---------- HELPERS ----------
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
const todayStr = () => new Date().toISOString().slice(0, 10);
function dayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  return Math.floor((now - start) / 86400000);
}
function bumpStreak() {
  const t = todayStr();
  if (progress.streak.lastDay !== t) {
    const yest = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    progress.streak = {
      lastDay: t,
      count: progress.streak.lastDay === yest ? progress.streak.count + 1 : 1,
    };
  }
}
function esc(s) {
  return String(s).replace(/[&<>"]/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])
  );
}
const ENGLISH_FRONT = ["sentences", "family", "casual", "chatphrases"];

// ---------- SPEECH ----------
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
const SPEECH_SUPPORTED = !!SR;
// Detection mode only needs a microphone, so speak mode is offered whenever
// getUserMedia exists — recognition just upgrades it to real grading.
const MIC_POSSIBLE = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);

// Urdu script -> rough roman consonants, so ASR output can be compared
// against our Roman-Urdu card text.
const UR_MAP = {
  "ا":"a","آ":"a","ب":"b","پ":"p","ت":"t","ٹ":"t","ث":"s","ج":"j","چ":"c",
  "ح":"h","خ":"k","د":"d","ڈ":"d","ذ":"z","ر":"r","ڑ":"r","ز":"z","ژ":"z",
  "س":"s","ش":"s","ص":"s","ض":"z","ط":"t","ظ":"z","ع":"","غ":"g","ف":"f",
  "ق":"q","ک":"k","گ":"g","ل":"l","م":"m","ن":"n","ں":"n","و":"w","ہ":"h",
  "ھ":"h","ة":"h","ء":"","ی":"y","ي":"y","ے":"e","ئ":"y","ؤ":"w"
};

// Reduce any string (Roman or Urdu script) to a consonant skeleton.
function skeleton(s) {
  let out = "";
  for (const ch of String(s).toLowerCase()) {
    if (UR_MAP[ch] !== undefined) out += UR_MAP[ch];
    else if (/[a-z]/.test(ch)) out += ch;
    else out += " ";
  }
  out = out
    .replace(/ch|sh|kh|gh|zh|th|ph/g, (m) => m[0] === "c" ? "c" : m[0])
    .replace(/[aeiou]/g, "")
    .replace(/(.)\1+/g, "$1")
    .replace(/\s+/g, "");
  return out;
}

function levenshtein(a, b) {
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    for (let j = 1; j <= b.length; j++) {
      cur[j] = Math.min(
        prev[j] + 1,
        cur[j - 1] + 1,
        prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
    prev = cur;
  }
  return prev[b.length];
}

// 0..1 similarity on consonant skeletons. Deliberately lenient — ASR on
// Urdu is imperfect and the goal is that you spoke, not a perfect match.
function rawSim(said, target) {
  const a = skeleton(said);
  const b = skeleton(target);
  if (!a || !b) return 0;

  // Full comparison. Edit distance over the longer string, so rambling
  // something unrelated (or much longer) scores badly.
  const full = 1 - levenshtein(a, b) / Math.max(a.length, b.length);

  // Allow a little padding around the phrase ("mai theek hu" for "Theek hu"),
  // but only for targets long enough that a chance window match is unlikely,
  // and only when that window is nearly exact. Otherwise any long utterance
  // contains a window resembling a short target.
  // Degenerate input ("la la la la", humming) collapses to one repeated
  // sound — never a real answer.
  if (new Set(a).size <= 1) return 0;

  // A wildly different length means it wasn't the same phrase.
  const ratio = Math.max(a.length, b.length) / Math.min(a.length, b.length);
  if (ratio > 2.5) return full * 0.6;

  if (b.length >= 7 && a.length > b.length && a.length <= b.length * 2.2) {
    let best = 0;
    for (let i = 0; i <= a.length - b.length; i++) {
      best = Math.max(best, 1 - levenshtein(a.slice(i, i + b.length), b) / b.length);
      if (best === 1) break;
    }
    if (best >= 0.85) return Math.max(full, 0.88);
  }
  return full;
}

// Cards often hold alternatives ("Kya haal hai? / Aur sunao?") or two clauses
// ("Theek hu, tum sunao"). Saying any one of those counts.
function similarity(said, target) {
  const variants = [target];
  String(target)
    .split(/\s*[\/,\u2013\u2014]\s*/)
    .map((s) => s.trim())
    .filter((s) => s.length > 2)
    .forEach((s) => variants.push(s));
  return Math.max(...variants.map((v) => rawSim(said, v)));
}

const PASS_THRESHOLD = 0.48;

let speechMode = localStorage.getItem("urdu-speech-mode") === "1";
let recog = null;
let listening = false;

// iOS is fussy: SpeechRecognition often reports "not-allowed" inside a
// home-screen PWA even when the mic is granted. Asking via getUserMedia first
// triggers the real permission prompt and unlocks it in most cases.
let micGranted = false;

async function ensureMic() {
  if (micGranted) return true;
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return false;
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    stream.getTracks().forEach((t) => t.stop());
    micGranted = true;
    return true;
  } catch (e) {
    return false;
  }
}

function listen(onResult, onError) {
  if (!SPEECH_SUPPORTED) return onError("unsupported");
  try {
    recog = new SR();
    recog.lang = "ur-PK";
    recog.interimResults = false;
    recog.maxAlternatives = 3;
    recog.continuous = false;
    recog.onresult = (e) => {
      const alts = [];
      for (let i = 0; i < e.results[0].length; i++)
        alts.push(e.results[0][i].transcript);
      listening = false;
      onResult(alts);
    };
    recog.onerror = (e) => {
      listening = false;
      onError(e.error || "error");
    };
    recog.onend = () => {
      if (listening) {
        listening = false;
        onError("no-speech");
      }
    };
    listening = true;
    recog.start();
  } catch (err) {
    listening = false;
    onError("start-failed");
  }
}

function stopListening() {
  if (recog && listening) {
    listening = false;
    try { recog.stop(); } catch (e) {}
  }
  stopVolumeGate();
}

// ---------- FALLBACK: speech DETECTION ----------
// When recognition is unavailable (common in iOS standalone PWAs), we can still
// require that you actually spoke. This can't check *what* you said — it just
// listens for sustained voice, then reveals the answer for you to compare.
let audioCtx = null, gateStream = null, gateRAF = null;
let recorder = null, chunks = [], lastClipUrl = null;

function stopVolumeGate() {
  if (recorder && recorder.state === "recording") {
    try { recorder.stop(); } catch (e) {}
  }
  if (gateRAF) cancelAnimationFrame(gateRAF), (gateRAF = null);
  if (gateStream) gateStream.getTracks().forEach((t) => t.stop()), (gateStream = null);
  if (audioCtx && audioCtx.state !== "closed") { try { audioCtx.close(); } catch (e) {} }
  audioCtx = null;
}

async function volumeGate(onSpoke, onError, onLevel) {
  try {
    gateStream = await navigator.mediaDevices.getUserMedia({ audio: true });
  } catch (e) {
    return onError("not-allowed");
  }

  // Record it too — hearing yourself back next to the answer is the closest
  // thing to a real check when the browser won't transcribe.
  chunks = [];
  if (lastClipUrl) { URL.revokeObjectURL(lastClipUrl); lastClipUrl = null; }
  try {
    recorder = new MediaRecorder(gateStream);
    recorder.ondataavailable = (ev) => { if (ev.data && ev.data.size) chunks.push(ev.data); };
    recorder.start();
  } catch (e) {
    recorder = null;
  }
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === "suspended") await audioCtx.resume();
    const src = audioCtx.createMediaStreamSource(gateStream);
    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = 1024;
    src.connect(analyser);
    const buf = new Uint8Array(analyser.fftSize);

    let voicedMs = 0, last = performance.now(), started = performance.now();
    const NEEDED_MS = 700;      // ~0.7s of voice counts as "you said it"
    const TIMEOUT_MS = 9000;

    const tick = () => {
      analyser.getByteTimeDomainData(buf);
      let sum = 0;
      for (let i = 0; i < buf.length; i++) {
        const v = (buf[i] - 128) / 128;
        sum += v * v;
      }
      const rms = Math.sqrt(sum / buf.length);
      const now = performance.now();
      const dt = now - last;
      last = now;
      if (onLevel) onLevel(Math.min(1, rms * 8));
      if (rms > 0.045) voicedMs += dt;
      if (voicedMs >= NEEDED_MS) { stopVolumeGate(); return onSpoke(); }
      if (now - started > TIMEOUT_MS) { stopVolumeGate(); return onError("no-speech"); }
      gateRAF = requestAnimationFrame(tick);
    };
    gateRAF = requestAnimationFrame(tick);
  } catch (e) {
    stopVolumeGate();
    onError("audio-failed");
  }
}

const IS_STANDALONE =
  window.navigator.standalone === true ||
  window.matchMedia("(display-mode: standalone)").matches;

// ---------- STATE ----------
let view = "home";
let deckKey = null;
let queue = [];
let idx = 0;
let flipped = false;
let stats = { got: 0, again: 0 };

const app = document.getElementById("app");

// ---------- RENDER: HOME ----------
function renderHome() {
  const prompt = SOTD_PROMPTS[dayOfYear() % SOTD_PROMPTS.length];
  const todaySotd = progress.sotd[todayStr()] || { text: "", revealed: false };
  const streakActive =
    progress.streak.lastDay === todayStr() ||
    progress.streak.lastDay ===
      new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  const streak = streakActive ? progress.streak.count : 0;

  let html = `
    <header class="header">
      <svg class="crest" viewBox="0 0 100 116" fill="none" aria-hidden="true">
        <path d="M50 8 C50 8 76 30 76 62 L76 104 L24 104 L24 62 C24 30 50 8 50 8 Z"
              fill="#fff" stroke="#E8A33D" stroke-width="3"/>
        <path d="M50 20 C50 20 67 38 67 63 L67 104 L33 104 L33 63 C33 38 50 20 50 20 Z"
              fill="none" stroke="#E8A33D" stroke-width="2" opacity=".65"/>
        <path d="M50 46 L54 58 L66 62 L54 66 L50 78 L46 66 L34 62 L46 58 Z" fill="#1A2B5C"/>
        <rect x="16" y="104" width="68" height="8" rx="4" fill="#E8A33D"/>
      </svg>
      <p class="urdu-title">اُردو</p>
      <h1 class="title">Daily Urdu</h1>
      <div class="rule"></div>
      <p class="subtitle">${
        streak > 0
          ? `${streak}-day streak — keep it going`
          : "Do one or two decks a day. Cards you miss come back sooner."
      }</p>
    </header>

    <div class="speaker-pick">
      <div class="speaker-copy">
        <strong>Speaking as</strong>
        <p>Urdu changes the verb for your own gender — "mai seekh <b>raha</b> hu" vs "seekh <b>rahi</b> hu".</p>
      </div>
      <div class="seg" id="speaker-seg">
        <button class="${speakerFem ? "" : "sel"}" data-sp="m">Male</button>
        <button class="${speakerFem ? "sel" : ""}" data-sp="f">Female</button>
      </div>
    </div>

    ${
      MIC_POSSIBLE
        ? `<div class="speak-toggle${speechMode ? " on" : ""}" id="speak-toggle">
             <div>
               <strong>Speak mode</strong>
               <p>Every deck flips to English → Urdu, and you say the answer out loud to pass.${
                 IS_STANDALONE
                   ? " <br><em>Heads up: iOS can't transcribe inside a home-screen app — here it only checks that you spoke. Open the site in Safari for real grading.</em>"
                   : ""
               }</p>
             </div>
             <span class="switch"><span class="knob"></span></span>
           </div>`
        : `<div class="speak-toggle off-note">
             <div>
               <strong>Speak mode unavailable</strong>
               <p>This browser gives no microphone access, so cards can't require speaking.</p>
             </div>
           </div>`
    }

    <section class="card sotd">
      <div class="deck-head">
        <div>
          <span class="deck-urdu">آج کا جملہ</span>
          <h2 class="deck-name">Sentence of the day</h2>
        </div>
        <span class="deck-count">${esc(prompt.target)}</span>
      </div>
      <p class="sotd-prompt">“${esc(prompt.en)}”</p>
      <textarea id="sotd-input" rows="2" placeholder="Write it in Roman Urdu…">${esc(
        todaySotd.text
      )}</textarea>
      ${
        todaySotd.revealed
          ? `<div class="sotd-answer">
               <p class="sotd-answer-text">${esc(prompt.ur)}</p>
               <p class="sotd-hint">Pattern: ${esc(prompt.hint)}</p>
             </div>`
          : `<button class="btn secondary" id="sotd-reveal">Reveal answer</button>`
      }
    </section>
  `;

  Object.entries(DECKS).forEach(([key, deck]) => {
    const p = progress[key] || {};
    const total = deck.cards.length;
    const mastered = deck.cards.filter((_, i) => (p[i] || 0) >= 2).length;
    const learning = deck.cards.filter((_, i) => (p[i] || 0) === 1).length;
    html += `
      <section class="card">
        <div class="deck-head">
          <div>
            <span class="deck-urdu">${deck.urdu}</span>
            <h2 class="deck-name">${esc(deck.name)}</h2>
          </div>
          <span class="deck-count">
            ${mastered} mastered${learning ? `<br>${learning} learning` : ""}
            <br><span class="dim">of ${total}</span>
          </span>
        </div>
        <div class="track">
          <div class="fill" style="width:${(mastered / total) * 100}%"></div>
          <div class="fill soft" style="width:${(learning / total) * 100}%"></div>
        </div>
        <div class="actions">
          <button class="btn primary" data-start="${key}" data-mode="review">Study weak cards</button>
          <button class="btn secondary" data-start="${key}" data-mode="all">All cards</button>
          ${
            mastered + learning > 0
              ? `<button class="btn ghost-sm" data-reset="${key}">Reset</button>`
              : ""
          }
        </div>
      </section>
    `;
  });

  html += `<footer class="footer">
      Get a card right once → <b>learning</b>. Right again → <b>mastered</b>, and it
      drops out of “study weak cards.” Missing it sends it back to zero.
      <br><br>Progress is saved on this device.
    </footer>`;

  app.innerHTML = html;

  const input = document.getElementById("sotd-input");
  if (input) {
    input.addEventListener("blur", () => {
      progress.sotd = { [todayStr()]: { text: input.value, revealed: todaySotd.revealed } };
      bumpStreak();
      save();
    });
  }
  const reveal = document.getElementById("sotd-reveal");
  if (reveal) {
    reveal.addEventListener("click", () => {
      const text = input ? input.value : "";
      progress.sotd = { [todayStr()]: { text, revealed: true } };
      bumpStreak();
      save();
      render();
    });
  }
  app.querySelectorAll("#speaker-seg [data-sp]").forEach((b) =>
    b.addEventListener("click", () => {
      speakerFem = b.dataset.sp === "f";
      localStorage.setItem("urdu-speaker", speakerFem ? "f" : "m");
      render();
    })
  );

  const toggle = document.getElementById("speak-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      speechMode = !speechMode;
      localStorage.setItem("urdu-speech-mode", speechMode ? "1" : "0");
      toggle.classList.toggle("on", speechMode);
    });
  }
  app.querySelectorAll("[data-start]").forEach((b) =>
    b.addEventListener("click", () => startSession(b.dataset.start, b.dataset.mode))
  );
  app.querySelectorAll("[data-reset]").forEach((b) =>
    b.addEventListener("click", () => {
      if (!confirm("Reset progress for this deck?")) return;
      progress[b.dataset.reset] = {};
      save();
      render();
    })
  );
}

// ---------- SESSION ----------
function startSession(key, mode) {
  const p = progress[key] || {};
  let indices = DECKS[key].cards.map((_, i) => i);
  if (mode === "review") {
    const weak = indices.filter((i) => (p[i] || 0) < 2);
    if (weak.length) indices = weak;
  }
  deckKey = key;
  queue = shuffle(indices);
  idx = 0;
  flipped = false;
  stats = { got: 0, again: 0 };
  view = "session";
  render();
}

function answer(gotIt) {
  const cardIdx = queue[idx];
  const cur = progress[deckKey][cardIdx] || 0;
  progress[deckKey][cardIdx] = gotIt ? Math.min(cur + 1, 3) : 0;
  bumpStreak();
  save();
  gotIt ? stats.got++ : stats.again++;
  if (!gotIt) {
    const at = Math.min(idx + 4 + Math.floor(Math.random() * 4), queue.length);
    queue.splice(at, 0, cardIdx);
  }
  idx++;
  flipped = false;
  if (idx >= queue.length) view = "done";
  render();
}

function renderSession() {
  const deck = DECKS[deckKey];
  const card = getCard(deckKey, queue[idx]);
  const englishFront = ENGLISH_FRONT.includes(deckKey);
  const pct = (idx / queue.length) * 100;

  // Grammar cards are explanations, not phrases — never spoken.
  const speakable = speechMode && MIC_POSSIBLE && deckKey !== "grammar";

  // In speak mode you always translate INTO Urdu, so English leads on every
  // deck — even the ones that normally show Urdu first.
  const urduSide = englishFront ? card[1] : card[0];
  const englishSide = englishFront ? card[0] : card[1];

  const front = speakable ? englishSide : card[0];
  const back = speakable ? urduSide : card[1];
  const target = urduSide;

  const frontLabel =
    deckKey === "grammar" ? "Question" : speakable || englishFront ? "English" : "Urdu";
  const backLabel =
    deckKey === "grammar" ? "Answer" : speakable || englishFront ? "Urdu" : "English";
  const longBack = back.length > 90;
  const longFront = front.length > 90;

  app.innerHTML = `
    <div class="session-top">
      <button class="btn ghost" id="back">← Decks</button>
      <span class="counter">${idx + 1} / ${queue.length}</span>
    </div>
    <div class="track"><div class="fill" style="width:${pct}%"></div></div>
    <div class="card-wrap" id="flip-zone">
      <div class="card-inner${flipped ? " flipped" : ""}" id="card-inner">
        <div class="face">
          <span class="face-label">${frontLabel}</span>
          <p class="card-text${longFront ? " small" : ""}">${esc(front)}</p>
          <span class="tap-hint">${speakable ? "say it, or tap to reveal" : "tap to flip"}</span>
        </div>
        <div class="face back">
          <span class="face-label">${backLabel}</span>
          <p class="card-text${longBack ? " small" : ""}">${esc(back)}</p>
        </div>
      </div>
    </div>
    ${
      speakable
        ? `<div class="speak-zone" id="speak-zone">
             <button class="mic" id="mic"><span class="mic-dot"></span> Say it out loud</button>
             <p class="speak-status" id="speak-status">Say it in Urdu — the app checks you.</p>
           </div>`
        : ""
    }
    <div class="answer-row${flipped ? "" : " hidden"}" id="answer-row">
      <button class="ans again" id="again">Again</button>
      <button class="ans got" id="got">Got it</button>
    </div>
  `;

  document.getElementById("back").addEventListener("click", () => {
    stopListening();
    view = "home";
    render();
  });
  document.getElementById("flip-zone").addEventListener("click", () => {
    flipped = !flipped;
    document.getElementById("card-inner").classList.toggle("flipped", flipped);
    document.getElementById("answer-row").classList.toggle("hidden", !flipped);
  });
  document.getElementById("again").addEventListener("click", (e) => {
    e.stopPropagation();
    stopListening();
    answer(false);
  });
  document.getElementById("got").addEventListener("click", (e) => {
    e.stopPropagation();
    stopListening();
    answer(true);
  });

  if (!speakable) return;

  const mic = document.getElementById("mic");
  const status = document.getElementById("speak-status");

  // Speech-detection fallback: reveal the answer, let you self-check.
  // Detection-only mode: we can hear THAT you spoke, not WHAT you said.
  function fallbackGate(reason) {
    status.className = "speak-status warn";
    status.textContent = "Speech check unavailable — listening for your voice only…";
    mic.classList.add("live");
    volumeGate(
      () => {
        mic.classList.remove("live");
        status.className = "speak-status warn";
        status.innerHTML =
          `iOS won't transcribe inside a home-screen app, so this only heard ` +
          `<em>that</em> you spoke. Play yourself back against the answer, then grade honestly.` +
          `<span id="clip-wrap"></span>`;
        flipped = true;
        document.getElementById("card-inner").classList.add("flipped");
        document.getElementById("answer-row").classList.remove("hidden");

        // Offer playback once the recorder has flushed its data.
        setTimeout(() => {
          if (!chunks.length) return;
          try {
            lastClipUrl = URL.createObjectURL(new Blob(chunks, { type: chunks[0].type || "audio/mp4" }));
            const wrap = document.getElementById("clip-wrap");
            if (!wrap) return;
            wrap.innerHTML = `<br><button class="btn secondary clip-btn" id="play-clip">▶︎ Hear yourself</button>`;
            const audio = new Audio(lastClipUrl);
            document.getElementById("play-clip").addEventListener("click", (ev) => {
              ev.stopPropagation();
              audio.currentTime = 0;
              audio.play().catch(() => {});
            });
          } catch (err) {}
        }, 250);
      },
      (err) => {
        mic.classList.remove("live");
        status.className = "speak-status fail";
        status.innerHTML =
          err === "not-allowed"
            ? `Mic access denied.${
                IS_STANDALONE
                  ? " In a home-screen app iOS asks separately — try opening the site in Safari, allow the mic there, then reopen the icon."
                  : " Tap the <b>aA</b> icon in Safari's address bar → Website Settings → Microphone → Allow."
              }`
            : "Didn't hear anything — tap and speak again.";
        document.getElementById("answer-row").classList.remove("hidden");
      }
    );
  }

  mic.addEventListener("click", async (e) => {
    e.stopPropagation();
    if (listening) {
      stopListening();
      mic.classList.remove("live");
      status.textContent = "Stopped.";
      return;
    }

    status.className = "speak-status";
    status.textContent = "Checking mic…";

    const ok = await ensureMic();
    if (!ok) {
      status.className = "speak-status fail";
      status.innerHTML = IS_STANDALONE
        ? `Mic blocked in the home-screen app. Open <b>${location.host}</b> in Safari, tap the mic once and allow it, then reopen the icon.`
        : `Mic blocked. Tap <b>aA</b> in Safari's address bar → Website Settings → Microphone → Allow, then reload.`;
      document.getElementById("answer-row").classList.remove("hidden");
      return;
    }

    if (!SPEECH_SUPPORTED) return fallbackGate("unsupported");


    mic.classList.add("live");
    status.textContent = "Listening…";

    listen(
      (alts) => {
        mic.classList.remove("live");
        const best = alts
          .map((t) => ({ t, s: similarity(t, target) }))
          .sort((a, b) => b.s - a.s)[0];

        if (best.s >= PASS_THRESHOLD) {
          status.className = "speak-status pass";
          status.innerHTML = `Heard: “${esc(best.t)}” ✓`;
          flipped = true;
          document.getElementById("card-inner").classList.add("flipped");
          setTimeout(() => answer(true), 1100);
        } else {
          status.className = "speak-status fail";
          status.innerHTML =
            `Heard: “${esc(best.t)}” — not quite. Target: <b>${esc(target)}</b>` +
            `<br><span class="dim">Try again, or use the buttons below.</span>`;
          flipped = true;
          document.getElementById("card-inner").classList.add("flipped");
          document.getElementById("answer-row").classList.remove("hidden");
        }
      },
      (err) => {
        mic.classList.remove("live");
        // Recognition can fail even with the mic granted (common on iOS
        // standalone). Drop to detection mode instead of dead-ending.
        if (err === "not-allowed" || err === "service-not-allowed" ||
            err === "unsupported" || err === "start-failed" ||
            err === "audio-capture" || err === "network") {
          return fallbackGate(err);
        }
        status.className = "speak-status fail";
        status.textContent =
          err === "no-speech"
            ? "Didn't catch that — tap and speak again."
            : "Mic error. Use the buttons below instead.";
        document.getElementById("answer-row").classList.remove("hidden");
      }
    );
  });
}

function renderDone() {
  app.innerHTML = `
    <div class="center">
      <p class="urdu-accent">شاباش</p>
      <h2 class="done-title">Session complete</h2>
      <p class="done-stats">${stats.got} got it · ${stats.again} to revisit</p>
      <button class="btn primary" id="again-deck">Review weak cards</button>
      <button class="btn ghost" id="home">Back to decks</button>
    </div>
  `;
  document
    .getElementById("again-deck")
    .addEventListener("click", () => startSession(deckKey, "review"));
  document.getElementById("home").addEventListener("click", () => {
    view = "home";
    render();
  });
}

function render() {
  if (view === "session") renderSession();
  else if (view === "done") renderDone();
  else renderHome();
  window.scrollTo(0, 0);
}

load();
render();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () =>
    navigator.serviceWorker.register("./sw.js").catch(() => {})
  );
}
