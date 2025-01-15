<script>
  import Badge from "$lib/components/badge.svelte";
  import Container from "$lib/components/container.svelte";

  const items = [
    {
        logo: '/bclass.png',
        title: 'Mid.Frontend Developer',
        date: 'Oct 2023 - Now',
        des: `BCLASS is a full-service digital agency that delivers a distinctive environment and experience to clients and users and extends the digital ecosystem through convergence and expansion of UX/UI design, web/mobile services and smart contract.`,
        to: "https://bclass.company/"
    },
    {
        logo: '/woay.webp',
        title: 'Junior/Mid.Frontend Developer',
        date: 'Oct 2022 - Oct 2023',
        des: `Woay is a platform that helps your business create & digitize user interaction activities, promoting sales in the form of games.`,
        to: "https://www.woay.vn/"
    },
    {
        logo: '/bitto.svg',
        title: 'Fresher/Junior.Frontend Developer',
        date: 'Oct 2021 - Dec 2022',
        des: `Bitto strives to build technology solutions to turn great ideas into tangible reality. \n \n
        Believe in finding practical solutions that support an efficient, safe and sustainable future for the lives we touch every day. This is why we work in close collaboration with clients.
        `,
        to: "https://www.bittosolution.vn/index.html"
    }
  ]
</script>

<div class="bg-black-27 py-28 lg:py-14" id="works">
  <Container>
    <Badge class="m-auto">Experiences</Badge>
    
    {#each items as {date, logo, title, des, to}}
        <a href={to} target="_blank" class="bg-gray-38 shadow-xl p-8 rounded-2xl mt-8 flex justify-between lg:flex-col lg:gap-8">
            <div class="w-full max-w-32">
                <img src={logo} alt="">
            </div>
            <div class="flex flex-col max-w-[50%] gap-4 lg:max-w-full">
                <span class="font-bold text-lg">
                    {title}
                </span>
                <span class="text-sm leading-[1.6]">
                    {des}
                </span>
            </div>
            <div class="font-extralight text-gray-400">{date}</div>
        </a>
    {/each}
  </Container>
</div>
