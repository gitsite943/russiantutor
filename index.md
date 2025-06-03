---
layout: default
title: "Home"
permalink: /
---
<body class="bg-white">
  <!-- HEADER -->
  <header class="fixed top-0 inset-x-0 z-50 bg-white shadow">
    <nav class="w-full p-4 lg:px-8" aria-label="Global">

      <!-- MOBILE: Top navigation (logo + brand, Free Lesson, burger menu) -->
      <div class="flex items-center justify-between lg:hidden">
        <!-- Mobile: Logo + Brand -->
        <a href="" class="flex items-center gap-x-2">
         <!-- image logo hide mobile -->
          <!-- <img class="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt=""> -->
          <span class="text-base font-bold text-gray-900">Rulyglot</span>
        </a>

        <!-- Mobile: Free Lesson button -->
        <a href="https://app.simplymeet.me/freelesson/freelesson-60-1748621659929" class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-700 transition">
          Free Lesson
        </a>

        <!-- Mobile: Burger menu button -->
        <button id="open-menu" type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-700">
          <span class="sr-only">Open main menu</span>
          <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      <!-- DESKTOP: Full layout (logo/brand, nav links, button) -->
      <div class="hidden lg:flex items-center justify-between">
        <!-- Desktop: Logo + Brand -->
        <a href="#" class="flex items-center gap-x-2 group">
        <!-- image logo hide dekstop -->
  <!-- <img class="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt=""> -->
  <span class="text-base font-bold text-gray-900 group-hover:underline underline-offset-4 transition">Rulyglot</span>
</a>

        <!-- Desktop: Navigation links -->
        <div class="flex gap-x-6">
          <a href="#features" class="text-sm font-semibold text-gray-900 hover:underline underline-offset-4">Why It Works</a>
         <a href="#testimonials" class="text-sm font-semibold text-gray-900 hover:underline underline-offset-4">Fluency Results</a>
          <a href="#faqs" class="text-sm font-semibold text-gray-900 hover:underline underline-offset-4">FAQs</a>
         <a href="#pricing" class="text-sm font-semibold text-gray-900 hover:underline underline-offset-4">Pricing</a>
        </div>

        <!-- Desktop: Free Lesson button -->
        <a href="https://app.simplymeet.me/freelesson/freelesson-60-1748621659929" class="rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-700 transition">
          Free Lesson
        </a>
      </div>
    </nav>

    <!-- MOBILE MENU (sliding panel) -->
    <div id="mobile-menu" class="hidden fixed inset-y-0 right-0 z-50 w-full bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div class="flex items-center justify-between">
        <!-- Mobile menu: logo + brand name -->
<a href="#" class="flex items-center gap-x-2 -m-1.5 p-1.5">
<!-- image logo hide dekstop -->
  <!-- <img class="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt=""> -->
  <span class="text-base font-bold text-gray-900">Rulyglot</span>
</a>
        <!-- Mobile menu: close button -->
        <button id="close-menu" type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
          <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile nav links -->
      <div class="mt-6">
        <div class="space-y-4">
         <a href="#features" class="mobile-menu-link block text-base font-semibold text-gray-900 hover:bg-gray-50 px-3 py-2 rounded">Why It Works</a>
<a href="#testimonials" class="mobile-menu-link block text-base font-semibold text-gray-900 hover:bg-gray-50 px-3 py-2 rounded">Fluency Results</a>
<a href="#faqs" class="mobile-menu-link block text-base font-semibold text-gray-900 hover:bg-gray-50 px-3 py-2 rounded">FAQs</a>
<a href="#pricing" class="mobile-menu-link block text-base font-semibold text-gray-900 hover:bg-gray-50 px-3 py-2 rounded">Pricing</a>
        </div>
    <!-- Free Lesson Button -->
<div class="mt-6">
  <a href="https://app.simplymeet.me/freelesson/freelesson-60-1748621659929" class="block w-full rounded-md bg-indigo-600 px-4 py-3 text-center text-sm font-semibold text-white shadow hover:bg-indigo-700 transition">
    Free Lesson
  </a>
</div>
      </div>
    </div>
  </header>


  <!-- HERO SECTION -->
  <div class="relative isolate pt-32 px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        You'll Speak Russian Or I'll Give You Money Back.
      </h1>
      <p class="mt-6 text-lg leading-8 text-gray-600">
       Tired of apps that promise fluency but leave you stuck? I work one-on-one as a native speaker to help you actually speak Russian — for real. No classrooms. No stress. And if you’re not seeing results, money back guaranteed.
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <a href="https://app.simplymeet.me/freelesson/freelesson-60-1748621659929" class="rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-700 transition">
          Free Lesson
        </a>
      </div>
    </div>
  </div>

  <!-- SCRIPT: toggle mobile menu -->
 <script>
  const openMenu = document.getElementById('open-menu');
  const closeMenu = document.getElementById('close-menu');
  const mobileMenu = document.getElementById('mobile-menu');

  openMenu?.addEventListener('click', () => mobileMenu.classList.remove('hidden'));
  closeMenu?.addEventListener('click', () => mobileMenu.classList.add('hidden'));

  // Close menu on mobile link click
  document.querySelectorAll('.mobile-menu-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
</script>

<!-- Features Section -->
<div id="features" class="bg-white py-16 sm:py-20">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:text-center">
      <h2 class="text-base/7 font-semibold text-indigo-600">Prepared to Speak. Ready to Lead.</h2>
      <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
        Language That Helps You Do Your Job.
      </p>
      <p class="mt-6 text-lg/8 text-gray-600">
        Whether you need to lead, connect, or understand — I’ll help you speak with accuracy, confidence, and ease.
      </p>
    </div>

    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">

        <!-- Native Russian Speaker -->
        <div class="relative pl-16">
          <dt class="text-base/7 font-semibold text-gray-900">
            <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
              <!-- Minimalist Microphone Icon -->
              <svg class="size-6 text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v9m0 0a3 3 0 003-3V6a3 3 0 10-6 0v3a3 3 0 003 3zm6 0a6 6 0 01-12 0m6 6v3.75" />
              </svg>
            </div>
            Native Russian Speaker
          </dt>
          <dd class="mt-2 text-base/7 text-gray-600">
            Learn Russian from someone who grew up speaking it. You’ll get real pronunciation, real phrases, and real fluency.
          </dd>
        </div>

        <!-- For Professionals -->
<div class="relative pl-16">
  <dt class="text-base/7 font-semibold text-gray-900">
    <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
      <!-- Person Icon with Head, Neck, and Shoulders -->
      <svg class="size-6 text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 14c3.866 0 7 1.79 7 4v1H5v-1c0-2.21 3.134-4 7-4z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 12a4 4 0 100-8 4 4 0 000 8z" />
      </svg>
    </div>
    For Professionals
  </dt>
  <dd class="mt-2 text-base/7 text-gray-600">
    Whether you’re training for space, science, or international work, you’ll learn exactly the Russian you need — clear, relevant, and focused on your mission.
  </dd>
</div>

        <!-- Learn from Who’s Been in Your Shoes -->
        <div class="relative pl-16">
          <dt class="text-base/7 font-semibold text-gray-900">
            <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
              <!-- Path/Map Icon -->
              <svg class="size-6 text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3l6 2.25L15 3l6 2.25v15l-6-2.25L9 21l-6-2.25V3zm6 2.25v15m6-17.25v15" />
              </svg>
            </div>
            Learn from Who’s Been in Your Shoes
          </dt>
          <dd class="mt-2 text-base/7 text-gray-600">
            I’ve taught myself both English and Spanish, so I know how tough it can be. That’s why my lessons focus on what actually helps you speak.
          </dd>
        </div>

        <!-- Money Back Guarantee -->
        <div class="relative pl-16">
          <dt class="text-base/7 font-semibold text-gray-900">
            <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
              <!-- Shield Check Icon -->
              <svg class="size-6 text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5l6 2.25v5.25a6.75 6.75 0 01-6 6.705A6.75 6.75 0 016 12V6.75L12 4.5z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2.25 4-4.5" />
              </svg>
            </div>
            Money Back Guarantee 
          </dt>
          <dd class="mt-2 text-base/7 text-gray-600">
            If it’s not working for you, you’ll get a full refund.
          </dd>
        </div>

      </dl>
    </div>
  </div>
</div>

<!-- how it works  -->
<section class="py-12 relative">
        <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div class="w-full flex-col justify-start items-center lg:gap-12 gap-10 inline-flex">
                <div class="w-full flex-col justify-start items-center gap-3 flex">
                    <h2 class="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">How It Works</h2>
                    <p class="w-full text-center text-gray-500 text-base font-normal leading-relaxed">You book a session, we personalize your lessons, and you start learning Russian one-on-one.</p>
                </div>
                <div class="w-full justify-start items-center gap-4 flex md:flex-row flex-col">
                    <div class="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                        <div class="self-stretch flex-col justify-start items-center gap-0.5 flex">
                            <h3 class="self-stretch text-center text-indigo-600 text-4xl font-extrabold font-manrope leading-normal">1</h3>
                            <h4 class="self-stretch text-center text-gray-900 text-xl font-semibold leading-8">Book a Free Lesson</h4>
                        </div>
                        <p class="self-stretch text-center text-gray-400 text-base font-normal leading-relaxed">Schedule a free lesson to meet your instructor and understand the learning method...</p>
                    </div>
                    <svg class="md:flex hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5.50159 6L11.5018 12.0002L5.49805 18.004M12.5016 6L18.5018 12.0002L12.498 18.004" stroke="#4F46E5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div class="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                        <div class="self-stretch flex-col justify-start items-center gap-0.5 flex">
                            <h3 class="self-stretch text-center text-indigo-600 text-4xl font-extrabold font-manrope leading-normal">2</h3>
                            <h4 class="self-stretch text-center text-gray-900 text-xl font-semibold leading-8">Start Your Learning Journey</h4>
                        </div>
                        <p class="self-stretch text-center text-gray-400 text-base font-normal leading-relaxed">Every lesson is designed around your goals, just what gets you results...</p>
                    </div>
                    <svg class="md:flex hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5.50159 6L11.5018 12.0002L5.49805 18.004M12.5016 6L18.5018 12.0002L12.498 18.004" stroke="#4F46E5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div class="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                        <div class="self-stretch flex-col justify-start items-center gap-0.5 flex">
                            <h3 class="self-stretch text-center text-indigo-600 text-4xl font-extrabold font-manrope leading-normal">3</h3>
                            <h4 class="self-stretch text-center text-gray-900 text-xl font-semibold leading-8">Speak Better, Guarantee</h4>
                        </div>
                        <p class="self-stretch text-center text-gray-400 text-base font-normal leading-relaxed">Try it risk-free — if the method doesn’t work for you, I’ll give you a full refund...</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

<!-- testimonials  -->
<section id="testimonials" class="relative isolate overflow-hidden px-6 py-16 sm:py-20 lg:px-8">
  <div class="mx-auto max-w-2xl lg:max-w-4xl">
    <div class="text-center">
      <h2 class="text-lg font-semibold text-indigo-600">Testimonials</h2>
    </div>
    <figure class="mt-10">
      <blockquote class="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
        <p>“ I never thought I could learn Russian living in Nebraska U.S. with no native speakers around—but with Rulyglot, it just clicked. Now I can hold conversations, and sometimes native Russians are surprised.”</p>
      </blockquote>
      <figcaption class="mt-10">
        <img class="mx-auto size-10 rounded-full" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Elena Roberts headshot">
        <div class="mt-4 flex items-center justify-center space-x-3 text-base">
          <div class="font-semibold text-gray-900">Andres Hernandez</div>
          <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
            <circle cx="1" cy="1" r="1" />
          </svg>
          <div class="text-gray-600">Entrepreneur, Sales & Service Industry Professional</div>
        </div>
      </figcaption>
    </figure>
  </div>
</section>

<!-- pricing  -->
<!-- pricing  -->
<section id="pricing" class="relative isolate px-6 py-16 sm:py-20 lg:px-8 bg-white">
  <!-- Header -->
  <div class="mx-auto max-w-4xl text-center">
    <h2 class="text-base font-semibold text-indigo-600">Pricing</h2>
    <p class="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
      Your First Step Toward Speaking Russian
    </p>
    <p class="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-gray-600 sm:text-xl">
      Book a free one-on-one session and experience personalized Russian learning — no credit card needed.
    </p>
  </div>

  <!-- Pricing Card -->
  <div class="flex justify-center mt-20">
    <div class="max-w-md w-full rounded-3xl border border-gray-200 shadow-xl p-8 text-center">
      <h3 id="tier-single" class="text-lg font-semibold text-indigo-600">Single Session</h3>
      <p class="mt-4 flex justify-center items-baseline gap-x-2">
        <span class="text-5xl font-bold tracking-tight text-gray-900">$ Free</span>
        <span class="text-base text-gray-500">/ for your first lesson</span>
      </p>
      <p class="mt-4 text-gray-600 text-base">
        Try a 60-minute private Russian lesson completely free. Meet a native Russian speaker and experience the method. If you choose to continue, each next lesson costs just <strong>$25</strong>.
      </p>
      <ul class="mt-8 space-y-4 text-sm text-gray-700 text-left">
        <li class="flex items-start gap-x-3">
          <svg class="h-6 w-6 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
          </svg>
          60-minute 1-on-1 session
        </li>
        <li class="flex items-start gap-x-3">
          <svg class="h-6 w-6 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
          </svg>
          Native Russian teacher
        </li>
        <li class="flex items-start gap-x-3">
          <svg class="h-6 w-6 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
          </svg>
          Tailored to your goals (work, travel, or conversation)
        </li>
        <li class="flex items-start gap-x-3">
          <svg class="h-6 w-6 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
          </svg>
          Just $25 per next lesson if you continue
        </li>
        <li class="flex items-start gap-x-3">
          <svg class="h-6 w-6 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
          </svg>
          <span class="font-medium text-gray-700">No card required for the free lesson</span>
        </li>
      </ul>
      <a href="https://app.simplymeet.me/freelesson/freelesson-60-1748621659929" class="mt-8 inline-block w-full rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Book Your Free Lesson
      </a>
    </div>
  </div>
</section>

<!-- FAQ  -->
<section id="faqs" class="py-24 bg-white">
  <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h6 class="text-indigo-600 font-semibold text-sm uppercase tracking-wide">FAQs</h6>
      <h2 class="text-4xl font-bold text-gray-900 mt-2">Frequently Asked Questions</h2>
    </div>

    <div class="space-y-4">
      <!-- FAQ 1 -->
      <div class="border border-gray-200 rounded-lg">
        <div class="p-5 text-left text-gray-900 font-medium text-lg">
          How does the one-on-one lesson work?
        </div>
        <div class="px-5 pb-5">
          <p class="text-gray-600">Each session is a live, 60-minute video call with me — a native Russian speaker. We focus on real speaking skills tailored to your level and goals.</p>
        </div>
      </div>

      <!-- FAQ 2 -->
      <div class="border border-gray-200 rounded-lg">
        <div class="p-5 text-left text-gray-900 font-medium text-lg">
          Do I need to prepare anything before the lesson?
        </div>
        <div class="px-5 pb-5">
          <p class="text-gray-600">No preparation needed. Just show up — I’ll guide the session based on your level, whether you're a total beginner or already learning.</p>
        </div>
      </div>

      <!-- FAQ 3 -->
      <div class="border border-gray-200 rounded-lg">
        <div class="p-5 text-left text-gray-900 font-medium text-lg">
          What if I don’t see progress?
        </div>
        <div class="px-5 pb-5">
          <p class="text-gray-600">If you're not satisfied or don’t feel like you're making progress, I’ll give you a full refund — no questions asked.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section (White Background) -->
<section class="py-12 px-6 sm:px-12 lg:px-24 bg-white border border-gray-200 rounded-2xl shadow-md my-12 max-w-6xl mx-auto">
  <div class="text-center max-w-3xl mx-auto">
  <h6 class="text-indigo-600 font-semibold text-sm uppercase tracking-wide mb-2">Take the First Step</h6>
    <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
      Not sure where to start with Russian?
    </h2>
    <p class="text-lg sm:text-xl text-gray-600 font-medium mb-8">
      Start with one free lesson — and see real progress from day one.
    </p>
    <div class="flex justify-center">
      <a href="https://app.simplymeet.me/freelesson/freelesson-60-1748621659929" class="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-indigo-700 transition">
        Free Lesson
      </a>
    </div>
  </div>
</section>

<!-- footer  -->
<footer class="bg-white border-t border-gray-200 shadow-sm mt-16">
  <div class="max-w-screen-xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-y-4 text-sm text-gray-500">
    
    <!-- Left: Copyright -->
    <span class="text-center md:text-left">
      © 2025 <span class="font-semibold text-gray-900">Rulyglot</span>. All rights reserved.
    </span>

  </div>
</footer>

<script>
  document.querySelectorAll('.toggle-faq').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const icon = button.querySelector('svg');

      const isOpen = !content.classList.contains('hidden');
      
      // Close all
      document.querySelectorAll('.toggle-faq + div').forEach(div => div.classList.add('hidden'));
      document.querySelectorAll('.toggle-faq svg').forEach(svg => svg.classList.remove('rotate-180'));

      // Toggle clicked
      if (!isOpen) {
        content.classList.remove('hidden');
        icon.classList.add('rotate-180');
      }
    });
  });
</script>
</body>