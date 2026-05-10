# Speaker Script - Applications of Artificial Intelligence

**Event:** Virtual Power Seminar, Omkaranada Institute of Management & Technology, Dehradun
**Date:** 30 April 2026, 10:30 - 11:30 AM
**Audience:** ~100 BSC-IT students
**Speaker:** Arun Addagatla, Founding Engineer @ Lamatic.AI
**Total runtime target:** ~58 min spoken + buffer for Q&A

> How to use this file: open it in Presenter View on a second screen or on your phone. The text under each slide is what you say, almost word-for-word. Italic quote lines are the transitions you read aloud as you advance the slide.

---

## Slide 1 - Title (Applications of Artificial Intelligence)

_~1.5 min_

Good morning, everyone. A very warm hello to all of you at Omkaranada Institute of Management and Technology, and a big thank you to the institute for inviting me to spend the next hour with you.

My name is Arun Addagatla, and the topic on the screen is something I genuinely think will define the next ten years of your life - Applications of Artificial Intelligence.

I want to start with the line you can see in the quote box, and I want you to actually let it sit for a second. "AI isn't coming for your job - the person who uses AI is." That is not just a clever sentence. That is the most accurate description I can give you of the world you are about to graduate into.

So here is what I am promising you for the next sixty minutes. This will be a practical session, not a research paper. I will not throw a single equation at you. We will look at where AI is already winning - in your phone, your bank, your hospital, your classroom - and then I will show you, live, how you can ride this wave starting tonight.

One small request - please note your questions. We will address them at the end of session.

> _Before we go any further, let me introduce myself - because the rest of the session will make a lot more sense once you know where I'm coming from._

---

## Slide 2 - About Me

_~1.5 min_

I am a Computer Science graduate, and right now I am a Founding Engineer at a company called Lamatic.AI. We build infrastructure for teams who want to ship Generative AI products. So my day-to-day work involves writing code, designing AI agents, and shipping features used by developers across the world.

Outside of work, I write on Medium - I have crossed about seventy thousand reads, mostly on LLMs, RAG, and AI agents. I also contribute to a few open-source projects, because I believe what you build in public matters more than what you put on a resume.

I have spoken at tech meetups across India, and honestly, this is the kind of audience where I have the most fun. You are at the perfect moment to bet on AI early, before the hype settles and the rules get written.

And one last thing I want you to remember - five years ago, I was sitting exactly where you are right now. Different city, different college, but the same questions in my head. Everything I am going to show you today is reachable for any of you. There is nothing magical about my path.

> _With that out of the way, here is exactly how the next sixty minutes are going to play out._

---

## Slide 3 - Today's Agenda

_~1.5 min_

Six sections, sixty minutes - and one live demo where I am going to build a real working app in front of you using nothing but plain English. So please stay till the end.

Section one and two are foundations. What is AI, really - cutting through the hype - and a quick history of how we got from a paper in 1950 to ChatGPT in your pocket. Short and punchy.

Section three is the meat of the talk. We will tour through industries where AI is already winning, and I will give you a concrete example for each - many of them Indian, many of them things you have used today.

Section four zooms into Generative AI specifically, because that is the wave breaking right now and the one most relevant to you as students.

Section five is the live demo. I will use English, and we will end up with a working app on the public internet.

And section six is, honestly, the most important slide for you personally. Career opportunites in AI, and a six-month roadmap that you can start today.

> _Let's start at the very beginning - what do we even mean when we say "Artificial Intelligence"?_

---

## Slide 4 - Foundations: What is AI?

_~3 min_

There is a very clean, one-line definition I want you to memorise and walk out with today. AI is the science of making machines do tasks that normally need human intelligence. That is it. No buzzwords.

Now, look at the four verbs on the screen - See, Understand, Decide, Create. Every single AI system on Earth fits into one or more of these four buckets, and it really helps to keep this mental model in your head as you read about the next big breakthrough.

Let's go one by one. *See* - this is computer vision. Your phone unlocking with your face is computer vision. A radiologist's AI assistant reading an X-ray to spot pneumonia is the same family of model, just trained on different data. Self-driving cars - same family.

*Understand* - this is language. Google Translate, Gmail's smart reply, ChatGPT writing your essay, Alexa understanding what you said - all language understanding.

*Decide* - this is the planner. Google Maps choosing a route from your hostel to the railway station. UPI flagging a fraudulent transaction in a hundred milliseconds. Netflix queueing the next episode at three in the morning when you cannot sleep.

*Create* - this is the new kid on the block, and frankly, the most exciting one. Generating images, writing code, composing music, producing video. We will spend a whole section on this later.

And the simple rule I want you to walk away with is the line at the bottom. *If a human eye, a human brain, or a human hand used to do it - AI is probably learning to do it now.* Whenever you see a new AI tool announced, ask yourself - which of these four verbs is it doing? You will instantly know what kind of model is under the hood.

> _You have probably heard four different terms thrown around - AI, ML, Deep Learning, Generative AI - let me make those crystal clear in just one slide._

---

## Slide 5 - AI vs ML vs Deep Learning vs Generative AI

_~3 min_

These four words get used interchangeably everywhere - LinkedIn posts, news articles, even some textbooks - but they are not the same thing. They are nested. Like Russian dolls. So let me unpack them for you.

The biggest box on the screen is **Artificial Intelligence**. AI is the umbrella - any machine doing something we would call intelligent. A chess program from 1990 that follows hardcoded rules - that is AI. A simple thermostat that adjusts your AC temperature - technically also AI in the broadest sense.

Inside AI sits **Machine Learning**. ML is the moment we stopped writing the rules and started letting the program *learn the rules from data*. So instead of telling the computer "if email contains the word lottery, mark as spam", we showed it a million emails labelled spam or not-spam, and the algorithm figured out the pattern itself. Spam filters, recommendation systems, fraud detection - all ML.

Inside ML sits **Deep Learning**. Deep learning is just ML using big neural networks - networks with many layers, hence "deep". This is what made image recognition, voice assistants, and self-driving cars actually work, and it really took off after 2012.

And inside Deep Learning sits **Generative AI**. These are deep learning models that do not just classify or predict - they *create*. ChatGPT creates text, Midjourney creates images, Sora creates video. That is the smallest, most recent box, and it is the one making all the noise right now.

The practical takeaway for you - whenever someone on your campus says "I'm learning AI", politely ask them which layer of this Russian doll they actually mean. Are they talking about linear regression or transformer fine-tuning? Both are AI, but the conversations are very different.

> _Now you know what AI is - let's see how we got from "can a machine think?" in 1950 to ChatGPT in your pocket today._

---

## Slide 6 - A 70-year journey

_~3 min_

The history of AI is genuinely a story of three winters and one explosion - and we are all standing right at the centre of the explosion. Let me walk you through it in seven moments.

**1950** - Alan Turing publishes a paper asking the question "Can machines think?" That single paper essentially started the field. He proposes what we now call the Turing Test.

**1956** - the Dartmouth Conference. This is where the term *Artificial Intelligence* is officially coined by John McCarthy. Pure optimism, almost no real results - they thought human-level AI was twenty years away. They were off by about seventy.

**1997** - IBM's Deep Blue beats Garry Kasparov, the world chess champion. This is the first time a machine clearly defeats the very best human at something we considered "thinking".

**2012** - the ImageNet moment. A deep neural network crushes every other approach at image recognition by a huge margin. This single result kicks off the deep learning revolution that we are still riding today.

**2017** - Google publishes a paper called "Attention Is All You Need" and gives the world the **Transformer** architecture. Every model you use today - ChatGPT, Claude, Gemini, Llama - is built on top of this paper. So if you ever want to read one research paper in your life, read this one.

**2022** - ChatGPT ships. It hits one hundred million users in two months. To put that in perspective - faster than TikTok, faster than Instagram, faster than any product in human history.

**2026** - which is today - we have entered the **Agents Era**. AI that does not just answer your question - it goes out and *does things* on your behalf. Books your flight, writes your code, runs your tests, files your taxes.

The one line I want to leave you with - more progress in the last three years than in the previous thirty. The rate of change is accelerating, not slowing down.

> _Big history lesson done - but how does AI actually learn? Let me show you in five steps._

---

## Slide 7 - Under the Hood: How AI Learns

_~3 min_

Strip away all the hype, and every single AI system - from your Netflix recommendations to ChatGPT to a self-driving car - follows the same five-step recipe. Let me walk you through it.

Step one - **Data**. You feed the system a lot of examples. Photos labelled cat versus dog. Movie ratings. Chat conversations. Sensor readings from a hospital. The more data, the better the result. This is why every big tech company is fighting tooth and nail to collect more of your data than the next company.

Step two - **Train**. An algorithm goes through those examples and adjusts millions - sometimes billions - of internal numbers. We call those numbers *parameters* or *weights*. The algorithm keeps tweaking until the system gets the examples right. This is the part that needs GPUs and electricity bills that look like a small country's budget.

Step three - **Model**. Once training is done, you freeze those numbers. That frozen blob of numbers is what we call a "model". Honestly, a model is just a function. Input goes in, prediction comes out. Nothing magical.

Step four - **Predict**. You show the model new data it has never seen, and it gives you an answer plus a confidence score. "This X-ray is 94 percent likely to show pneumonia." "This transaction is 0.3 percent likely to be fraud."

Step five - **Improve**. You collect feedback on its mistakes - users clicking dislike, doctors correcting a diagnosis - and you retrain. This loop never really stops. That is why ChatGPT today is dramatically better than ChatGPT two years ago.

The key insight, which I want you to walk away with - AI models do not *think*. They find patterns in data and predict what comes next. And almost always, *better data beats fancier algorithms*. So if you ever build something with AI, focus on your data first.

> _Now that you know the recipe, you will start spotting AI everywhere - in fact, you have already used it about fifty times today without even noticing._

---

## Slide 8 - AI in Daily Life

_~3 min_

Let's do a quick show of hands - or just type "yes" in the chat. How many of you woke up this morning and unlocked your phone with your face? Now keep your hand up - or type yes again - if on the way to college you opened Instagram, YouTube, or Spotify? Right. So that is AI - eight times before breakfast.

Every tile you see on this slide is an AI system you used in the last twenty-four hours, whether you realised it or not.

Instagram and YouTube reels - those are deep learning recommenders deciding exactly what your eyes see next, and they are *frighteningly* good at it. Google Maps - traffic prediction trained on anonymous GPS pings from a billion phones around the world. Gmail - the spam filter is over ninety-nine percent accurate, and Smart Compose is a transformer model literally finishing your sentences.

UPI fraud detection - and this is where Indians are global leaders - NPCI runs ML models on every single UPI transaction in milliseconds. That is why your card sometimes gets blocked the second something looks even slightly off.

Ola, Uber, Swiggy, Zomato - dynamic pricing during a thunderstorm, ETA prediction down to the minute, route optimisation for the delivery executive. All AI. Amazon's "customers also bought" - one of the highest-revenue AI systems ever built.

The point I really want to drive home is this. AI is not some future technology. It is already a utility, like electricity. The question for you is no longer whether to engage with it. The question is - are you going to keep being a passive user of AI, or are you going to learn to *build* with it?

> _Let's leave the consumer apps for a moment and zoom into the industries where AI is doing serious heavy-lifting - starting with the one closest to you as a CS student._

---

## Slide 9 - Application #1: AI in Software Development

_~2 min_

This first application is the one most relevant to every single person her - because AI is changing how software itself gets built. And students, this is your home turf.

On the frontend - tools like **v0 by Vercel**. You type a one-line description of a UI in English, and v0 generates production-quality React code with TypeScript and Tailwind CSS. I am going to show you this live in our demo section, so hold onto that thought.

On the backend - engineers are using LLMs to design databases, write APIs, and especially to build something called **RAG pipelines**. RAG stands for Retrieval Augmented Generation, and the simple way to think about it is - it is how you connect a model like ChatGPT to *your private documents* so it can answer questions about them. Tools like LangChain and LlamaIndex have made this almost routine.

And the third bucket is **agentic workflows**. Tools like **Cursor** and **GitHub Copilot** let you talk to your entire codebase in English. Andrej Karpathy, one of the most respected voices in AI, calls this "Software 3.0" - English becomes the new programming language.

Now the honest reality - junior developers who use these tools well are now shipping code at a level that used to take three to five years of experience. That is not a hot take. That is what I see in my own team and in hiring across the industry.

> _Software is just the start - let's look at where AI is literally saving lives._

---

## Slide 10 - Application #2: AI in Healthcare

_~2 min_

Healthcare is the field where AI has gone from research labs to real hospitals fastest, because every minute saved can mean a life saved. Let me give you three concrete examples.

**Medical imaging** - models that read X-rays, MRIs, and CT scans. Google DeepMind built a breast cancer screening model that matches the accuracy of expert radiologists - and in some studies, it beats them. The same technique is used to detect diabetic retinopathy, fractures, and tumours.

**Drug discovery** - this one is genuinely science-fiction-level. DeepMind built a system called **AlphaFold** that predicted the 3D structure of over two hundred million proteins. To give you context - that protein folding problem was unsolved for fifty years in biology. AI cracked it in two. Pharmaceutical companies are now using AlphaFold every single day to design new drugs in months instead of decades.

**Patient care** - your Apple Watch can detect atrial fibrillation, which is a heart rhythm disorder, before you ever feel a symptom. Apps like 1mg and Practo here in India can triage your symptoms before you even book a doctor's appointment.

Speaking of India - AIIMS and the Indian government are running active pilots for AI-assisted tuberculosis and diabetic retinopathy screening in rural districts where doctors are scarce. This is one of the highest-impact use cases of AI on the planet, and it is happening right here.

If you are a CS student who is also fascinated by biology or medicine, AI in healthcare is one of the widest-open fields you can enter. Companies pay a real premium for that combination.

> _From hospitals to your wallet - every UPI tap you make is also an AI moment._

---

## Slide 11 - Application #3: AI in Finance & Banking

_~2 min_

India does more digital payments than any other country on Earth - and AI is the silent guard standing between you and fraud. Let me show you how.

**Fraud detection** - NPCI's engine, the one that runs UPI, scans seven hundred million transactions a *day*, flagging suspicious ones in milliseconds. That is why the moment your card transaction looks even slightly unusual - a different city, an odd time, a different merchant pattern - it gets blocked instantly. None of that is human review. That is all AI.

**Credit scoring** - companies like CRED, KreditBee, and globally ZestFinance, use what we call "alternative data" - your phone bill payment history, your app usage patterns, your digital footprint - to build credit scores for people who do not have traditional credit histories. This is bringing formal credit to hundreds of millions of Indians who used to be invisible to banks.

**Algorithmic trading** - over seventy percent of equity trading volume in the US is now driven by algorithms. Hedge funds like Jane Street, Renaissance Technologies, Two Sigma - they are essentially software companies that happen to make money on Wall Street. Many of them hire engineers, not finance people.

**Conversational banking** - HDFC has EVA, ICICI has iPal. Chatbots that handle millions of routine queries that used to clog up call centres for hours.

Career angle for you - "AI in fintech" pays *very* well in India and abroad, and the entry barrier is honestly lower than pure research roles. If you can build with APIs and you understand a bit of finance, you are immediately employable.

> _Banking is one industry, but the one I think will affect you most directly next is education itself._

---

## Slide 12 - Application #4: AI in Education

_~2 min_

Every single student in this room has effectively just been given a free private tutor that never sleeps, never gets tired, and never charges by the hour. The only question is whether you are using it.

**Personalised learning** - platforms like Khanmigo from Khan Academy, BYJU's, and Duolingo adapt to *your* pace, *your* weak topics, and *your* learning style. The textbook used to teach the same content the same way to a hundred students. AI flips that.

**AI tutors twenty-four-seven** - and this is the one I want you to internalise today. ChatGPT, Claude, Gemini - they can explain *any* concept at *any* level. Stuck on a topic in operating systems? Ask ChatGPT - "explain semaphores like I am in class eight". Then ask "now explain it like I am preparing for a Google interview". Watch what happens.

Stanford ran a real study in 2024 and found that students using AI tutors learned about *twice* as fast as control groups. Think about what that compound interest looks like over your three years of BSC-IT.

**Grading and feedback** - tools like Gradescope, Turnitin's AI detector, and Grammarly take the routine stuff off teachers' plates so they can focus on what only humans do well - mentoring you.

Practical advice for tonight - pick one tough topic from your syllabus that you are dreading. Open ChatGPT or Claude. Ask it to teach you that topic in three different analogies. You will be surprised.

> _From classrooms to couches - let's see what AI is doing to your favourite OTT app._

---

## Slide 13 - Application #5: AI in Entertainment & Media

_~2 min_

There is a single button that the entire entertainment industry has built billion-dollar AI systems around. It is not a search bar. It is the "Play Next" button.

**Recommendations** - Netflix has publicly admitted that *eighty percent* of what you watch on their platform is chosen by their algorithm, not by you actively searching. Same story with YouTube, Spotify, and Instagram Reels. These recommendation engines are some of the most sophisticated AI systems on the planet, and they directly drive revenue.

**Content generation** - and this is where things are getting wild. **Sora** generates ten-second cinematic videos from a sentence. **Midjourney** generates art that would have taken a designer a week. **ElevenLabs** can clone any voice in any language - I have heard my own voice speak fluent Spanish, and it was unsettlingly good. A single creator with no studio can now ship at a level that used to require a small production house.

**Gaming and VFX** - NVIDIA's DLSS technology upscales your video games in real time using AI. Unreal Engine's MetaHuman lets a solo developer create photoreal characters. And Hollywood is openly de-aging actors with AI now - you have seen Harrison Ford and Mark Hamill in recent films looking thirty years younger.

There is a nuance worth saying out loud. This is also the area with the toughest ethics questions - deepfakes, copyright, identity. We will come back to this when we discuss risks.

> _From entertainment to the roads outside this campus - AI is rewriting transportation too._

---

## Slide 14 - Application #6: AI in Transportation & Logistics

_~2 min_

Whether you are booking an Ola, ordering from Swiggy, or watching a driverless taxi on Instagram - that is all AI in motion. Quite literally.

**Self-driving cars** - **Waymo** is currently doing more than one hundred and fifty thousand fully driverless rides every week in cities like San Francisco, Phoenix, and Los Angeles. Tesla's Full Self-Driving software runs on over two million cars worldwide. The car you buy in five years will probably do the highway driving for you.

**Smart routing** - Google Maps re-routes about a billion users a day using a model trained on anonymous GPS pings from phones across the planet. The exact same technology powers Ola and Uber's ETAs, Swiggy's delivery time prediction, and Dunzo's pickup logistics.

**Supply chain** - Amazon's warehouses run on ML-driven robots that decide which item to pick from which shelf in which order. Flipkart predicts demand at the pin-code level so the right product is in the right warehouse *before* you order it. That is why your delivery arrives in twelve hours.

A fun fact to take away - the AI inside a self-driving car is making a few hundred decisions per second, processing inputs from cameras, radar, and LiDAR, and choosing what to do next - while never getting tired, distracted, or angry at the driver in the next lane.

> _Two more applications, then we will talk about the wave that has changed everything - Generative AI._

---

## Slide 15 - Applications #7 & #8: Agriculture and Cybersecurity

_~1.5 min_

Two more domains where AI is quietly running the show - one feeds you, the other protects you online.

**Agriculture** - and this is one of the most underrated applications of AI in India. Drones with computer vision fly over fields and spot crop disease early - sometimes weeks before a farmer would notice. ML models predict weather and yields, helping farmers decide when to sow and when to harvest. Platforms like **eNAM** and AgriBazaar use ML for market price forecasting so farmers do not get exploited at the *mandi*. Precision farming applies fertiliser only where it is needed, saving millions of litres of water and tonnes of chemicals.

**Cybersecurity** - this is AI fighting AI. Intrusion detection systems flag anomalies in network traffic in real time. Phishing and spam filters - Gmail's spam filter is over ninety-nine percent accurate, and that is almost entirely because of machine learning. Malware classification - identifying zero-day variants before any human has seen them. And the newest battlefield - **deepfake detection**. As generative models get better at creating fake video, we need equally smart models to detect them.

The big idea I want you to walk away with from these two slides - every industry is a software industry now, and every software industry is rapidly becoming an AI industry. There is no "non-AI" career left.

> _Now let's zoom into the application that has caused the most noise globally and the one most relevant to you - Generative AI._

---

## Slide 16 - Application #9: Generative AI

_~3 min_

If you remember just one slide from today, please make it this one. Generative AI is the biggest technology wave of your lifetime, and you happen to be entering the workforce right as it breaks. The timing could not be better, but only if you act on it.

Quick context - ChatGPT hit one hundred million users in two months. The fastest-growing product in human history. For comparison - TikTok took nine months. Instagram took two and a half years. Facebook took four years. So whatever you think the speed of adoption is, it is faster.

Now let me walk you through the five categories of Generative AI on the screen, because each one of these is a multi-billion-dollar market.

**Text** - ChatGPT, Claude, Gemini, Llama. They write your emails, summarise research papers, debug your code, plan your week, draft your assignments. If you have not used Claude or ChatGPT for at least an hour today, you are leaving free productivity on the table.

**Image** - Midjourney, Gemini Image, Stable Diffusion. Logos, ads, product mockups, concept art - in seconds. Designers are not being replaced, but designers who use these tools are absolutely replacing the ones who do not.

**Audio** - ElevenLabs clones voices with eerie accuracy. Suno composes original songs from a one-line prompt. OpenAI's voice models can dub your video in any language while keeping your accent and tone.

**Video** - Sora, Veo, Runway, Kling. You type a sentence, you get a ten-second cinematic clip. The film and ad industry has not fully felt this yet, but it will, and soon.

**Code** - and this is the one I want every BSC-IT student in this room to actually try this week. Cursor, GitHub Copilot, Claude Code. These tools autocomplete, refactor, debug, and *build entire apps* from English descriptions.

The pattern across all five is the same. Anything humans used to *create* with words, pixels, sounds, or code - AI now collaborates with us on. That is the wave. Ride it.

> _Knowing about these tools is one thing - using them is another. Here's a short list of what you should personally try this week._

---

## Slide 17 - Tools to try this week

_~2.5 min_

I have grouped these tools into three buckets - learn, code, and ship - because that is the order in which a BSC-IT student should level up. Take a screenshot of this slide now.

**Bucket one - Learn and Research.** **ChatGPT** or **Claude** for explanations at any level - I genuinely use Claude as my private tutor for everything from system design to business books. **Perplexity** for AI search with proper citations - if you want answers with sources, this is what you use instead of Google for research. **NotebookLM** is a Google product that takes your lecture PDFs and turns them into a *podcast* you can listen to on the bus to college. I am not joking, try it tonight.

**Bucket two - Code Faster.** **Cursor** is an AI-native IDE - you literally chat with your codebase. I write almost no code without it now. **GitHub Copilot** does autocomplete inside Visual Studio Code if you prefer that setup. **v0 by Vercel** turns a UI sentence into production React code, and I will demo it live in just a few minutes.

**Bucket three - Build and Ship.** **Lamatic.ai** - yes, that is my company - lets you build full GenAI workflows visually with no boilerplate. **Hugging Face** has free models, free datasets, and free hosting - it is basically the GitHub of AI, and you should have an account today. **Replit Agent** builds entire apps from a single description, all running in the browser.

One ask from me to all of you - pick *one tool from each bucket* this weekend, spend just one hour with each, and you will be ahead of about eighty percent of your batchmates by Monday morning. That is not an exaggeration. The bar is genuinely that low right now.

> _Talking about tools is fine, but I would rather show you - so let's actually build something live, in front of you, in ten minutes._

---

## Slide 18 - Live Demo

_~8.5 min_

Alright, no slides for the next ten minutes. I am going to share my screen, and we are going to build a working web app together using nothing but plain English. By the end of this section, the app will be live on the public internet.

We will be building a student attendance tracker because it is something every one of you can imagine using.

I am going to walk through the four steps you see on the screen. **Describe** the app in plain English. **Scaffold** the code and UI using AI. **Fix a bug and add a feature** - because real apps always have bugs. And finally **deploy** it live on the internet.

Watch carefully. Every prompt I type, you should be able to read on screen.

### Demo prompts (read aloud as you type each one)

**Prompt 1 - Scaffold (in v0.dev):**

> Build a clean, dark-themed student attendance tracker. It should have a list of student names, a checkbox next to each, a date selector at the top, a "Mark all present" button, and a stats card showing present/absent count. Use Tailwind, shadcn/ui, and TypeScript. Make it mobile-friendly.

**Prompt 2 - Add a feature:**

> Add a "Save day" button that stores attendance in localStorage. Then add a second tab called "History" that shows a table of saved dates with the count of present students per day.

**Prompt 3 - Fix a bug (use whatever shows up; if nothing breaks, force one):**

> The "Save day" button is overwriting the previous day's data. Fix it so each date is stored separately keyed by the selected date.

**Prompt 4 - Polish:**

> Add a top-right toggle for light/dark mode and a small confetti animation when 100% of students are marked present.

**Deploy step:**

Click v0's "Deploy to Vercel" button, sign in, and grab the public URL. Paste it in the meeting chat. Read it out loud to the audience.

### Closing line for the demo

That is it. English in, working app out. This took us about eight minutes. Five years ago - this was a week of work for a junior developer. Three years ago - this was three days. Today - eight minutes, and a student in their first year can do it. That is the wave. That is what we mean when we say AI changes everything.

**Backup plan if internet or v0 fails** - switch to a screenshot walkthrough of a previously deployed v0 app on your laptop, narrate the same four prompts as if live. Last resort - play a 60-second pre-recorded screencast.

> _That was English in, working app out - now imagine doing that for five years as your career. Speaking of careers, let's talk about your future._

---

## Slide 19 - Careers in AI

_~2.5 min_

When students hear "AI career", most of them think of one role - data scientist - but the actual job market is much bigger and pays much better than that. Let me walk you through the six paths that are actively hiring in India right now.

**AI / ML Engineer** - the builder. Python, PyTorch, MLOps, model deployment. Salary range eight to thirty lakhs per annum in India. This is the most common AI role on Naukri and LinkedIn right now, and it is what most BSC-IT students with good projects can target straight after graduation.

**Data Scientist** - the analyst. Statistics, SQL, visualisation, business storytelling. Salary range six to twenty-five lakhs. Less code-heavy than ML engineering, more about insight.

**AI Product Engineer** - and this is the role I personally think most BSC-IT students should aim for. You wrap LLMs into real products using APIs, RAG, and agents. Eight to thirty-five lakhs. The entry barrier is product thinking and shipping ability, not a PhD. This is exactly what we do at Lamatic, and it is the role that is exploding right now.

**Prompt and AI Ops** - this is the newest role on the market. Designing prompts, building evals, managing pipelines. Four to eighteen lakhs. The entry barrier is genuinely low - English plus curiosity gets you in - which makes it a great first AI role.

**AI Researcher** - the inventor. Heavy on mathematics, papers, GPUs. Twelve to sixty lakhs. Almost always requires a master's or a PhD, and you should only chase this if you genuinely love research.

**AI plus X domain expert** - this last one is the most underrated. Be the person who knows law *plus* AI. Or healthcare *plus* AI. Or agriculture *plus* AI. Companies will fight over you, because most pure AI engineers do not understand the domain, and most domain experts do not understand AI.

Pick the role that matches your interest, not the one with the highest salary. Five years from now, salaries will normalise - but your daily work will not.

> _So how do you actually get from where you are today to one of those roles? Six months. Here's the plan._

---

## Slide 20 - 6-Month AI Roadmap

_~2.5 min_

This roadmap is what I would do if I were starting BSC-IT today, in 2026 - and I have coached enough juniors and seen enough successful career switches to know it works. Take a screenshot. Stick it on your wall.

**Month one - Foundations.** Python with hands-on projects, not just tutorials. Git and GitHub - learn to push code daily. Basic linear algebra and probability from Khan Academy - free. And use ChatGPT or Claude as your daily tutor for everything you do not understand. By the end of month one you should have a public GitHub profile with green squares.

**Months two and three - Core ML.** Take Andrew Ng's ML Specialization on Coursera - you can audit it for free. Learn Pandas, NumPy, scikit-learn. Build three small projects and push them to GitHub. Try one Kaggle challenge - even the Titanic dataset is fine.

**Month four - Deep Learning.** Take fast.ai's practical course - it is the best practical deep learning course on the internet, and it is free. Learn PyTorch hands-on. Train an image classifier on *your own* dataset - your dog versus your cat, your handwriting, anything personal. Then read a blog post called "The Illustrated Transformer" - it is the clearest explanation of how ChatGPT works that I have ever seen.

**Month five - Generative AI.** Build a chatbot using the OpenAI or Groq API. Learn RAG using LangChain, Lamatic, or LlamaIndex. Ship one full app on Vercel - even something small. And then write *one* Medium blog post about what you built. That blog will get you interviews.

**Month six - Stand out.** Contribute to one open-source AI repository on GitHub. Build in public on X and LinkedIn - post weekly. Present at your campus tech club. And finally, pick a niche - vision, NLP, agents, or RAG - and go deep.

The single most important habit across all six months is this - **build in public**. Recruiters are now finding candidates by searching GitHub and Twitter, not by reading resumes. Make yourself findable.

> _Before you go and conquer AI, I owe you the honest other side - because every powerful tool comes with real risks._

---

## Slide 21 - The Other Side: Risks

_~2 min_

I would be doing you a disservice if I only sold you the magic, so let me spend two minutes on what AI gets wrong and what we, as the next generation of builders, need to fix.

**Bias.** Models trained on biased data make biased decisions. Hiring filters that prefer one gender. Loan approval models that systematically reject certain pin codes or castes. Facial recognition that works worse on darker skin tones. The fix is not to ban AI - the fix is diverse data, regular audits, and always asking *who is in this dataset*.

**Hallucination.** LLMs confidently make things up. ChatGPT will invent academic citations that do not exist, court cases that never happened, and even functions that are not in your code library. The rule for the rest of your life - *never blindly trust an AI output, always verify*.

**Job disruption.** Yes, some jobs will go. But here is the truth - the people losing jobs are not the ones being replaced by AI. They are the ones who refuse to learn it. Use AI as a co-pilot, not as a competitor.

**Deepfakes and misinformation.** Generated videos can swing elections. We have already seen cases. Learn to spot them, and demand provenance and watermarking from platforms.

**Privacy.** Whatever you paste into an AI tool can become training data for the next model. Be careful with work documents, personal photos, confidential code. Read the privacy policy at least once.

**Energy and climate.** Training a frontier model uses as much electricity as a small town for a year. The industry is racing toward greener compute, and you can be part of that effort.

These are not reasons to avoid AI. They are reasons to *build it responsibly*. That is part of the job description now.

> _Heavy stuff - let's land this with the five things I want you to actually walk out of this session remembering._

---

## Slide 22 - Key Takeaways

_~2.5 min_

If you forget everything else from today, please carry these five sentences with you.

**One. AI is not magic.** It is pattern-matching on data. Better data beats fancier models, almost always. Whenever someone tells you a new AI tool is "magic", ask them what data it was trained on.

**Two. AI is already everywhere.** Healthcare, finance, your phone, your feed, your city's roads. It is not coming - it is already here. Stop thinking of AI as the future. Start thinking of it as the present.

**Three. Generative AI changes everything.** Text, image, audio, video, code - creation itself is becoming a command line. Whatever you used to create with hours of effort, you can now create with a sentence. Get good at the sentence.

**Four. You don't have to build models.** I want this one to land. Most jobs in AI are not about training new models - they are about building *products on top of AI* that make people's lives better. Your job is to ship. Engineering, product sense, and curiosity matter more than a PhD in maths.

**Five. The best time to start is today.** Four to six focused months is genuinely enough to stand out as a BSC-IT graduate. There has never been a better window in tech history. The window will not stay open forever - in five years, AI fluency will be table stakes, not a differentiator. So start now.

One personal request before we move to questions. Pick one tool from this talk tonight. Build one tiny thing this week. And then DM me on LinkedIn or my website with what you built. I read every message.

> _That's a wrap on the talk - now I'd love to hear from you._

---

## Slide 23 - Thank You & Q&A

_~3-5 min (buffer)_

Thank you so much for an hour of your time, and thank you again to Omkaranada Institute of Management and Technology for hosting me. This part of the session is yours, not mine.

So - drop your questions in the chat, or unmute and ask, whichever is easier. While you think, let me seed a few questions I get asked at almost every session, in case you are feeling shy.

First - "What if I'm not good at maths? Can I still get into AI?" Short answer - yes, absolutely, especially for product engineering and applications roles. Mathematics matters mainly for research. For most jobs, shipping skills matter more.

Second - "Should I do a master's, or start working straight after BSC-IT?" Honest answer - if you can get a strong product engineering or AI engineering job, take it. Real-world projects beat another two years in classrooms. Pursue a master's only if you want to do research or you want to switch geography.

Third - "Which one tool should I start with this weekend?" My pick for you is Cursor, paired with Claude. Build one tiny app this weekend - even a simple calculator with a clever twist. You will not believe how much you can do in two hours.

If you want to stay in touch - my website is on screen, *arunaddagatla.vercel.app*. I am also on LinkedIn and Medium under the same name. I reply to every message that mentions Omkaranada, so feel free to write in.

The line I want to leave you with - **you're not late, you're early. Go build.**

Thank you so much, everyone. Have a wonderful rest of your day, and I will see you on the internet.

---

## Time Budget Summary

| Slide | Topic | Minutes |
|---|---|---|
| 1 | Title | 1.5 |
| 2 | About Me | 1.5 |
| 3 | Agenda | 1.5 |
| 4 | What is AI? | 3.0 |
| 5 | AI vs ML vs DL vs GenAI | 3.0 |
| 6 | 70-year history | 3.0 |
| 7 | Under the hood | 3.0 |
| 8 | Daily life | 3.0 |
| 9 | Software dev | 2.0 |
| 10 | Healthcare | 2.0 |
| 11 | Finance | 2.0 |
| 12 | Education | 2.0 |
| 13 | Entertainment | 2.0 |
| 14 | Transportation | 2.0 |
| 15 | Agri & Cybersec | 1.5 |
| 16 | Generative AI | 3.0 |
| 17 | Tools to try | 2.5 |
| 18 | Live Demo | 8.5 |
| 19 | Careers | 2.5 |
| 20 | Roadmap | 2.5 |
| 21 | Risks | 2.0 |
| 22 | Takeaways | 2.5 |
| 23 | Q&A | 3.0 |
| **Total** | | **~59.5 min** (Q&A flexes to fill the 60-min slot) |

Word counts are tuned for a ~150-word-per-minute conversational pace. The Live Demo slot is the most flexible block - if the demo runs short, it gives you 1-2 extra minutes for Q&A; if it runs long, slides 9-15 can be tightened by skipping one example each.
