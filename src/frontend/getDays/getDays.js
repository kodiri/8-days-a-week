export default function getDays() {
  return [
    {
      id: 'monday',
      fitness: {
        picture: require('./fitness/posture.png'),
        alt: "posture",
        url:'https://www.acefitness.org/education-and-resources/lifestyle/blog/6593/top-25-at-home-exercises'
      },
      quote: {
        quote: "Work hard for what you want because it won't come to you without a fight. You have to be strong and courageous and know that you can do anything you put your mind to. If somebody puts you down or criticizes you, just keep on believing in yourself and turn it into something positive.",
        quoter: "Leah LaBelle"
      },
      food: {
        name: "Creamy Avocado Dip",
        picture: require('./food/avocadodip.jpg'),
        alt: "Creamy Avocado Dip",
        url: "https://www.delish.com/cooking/recipe-ideas/recipes/a45365/creamy-avocado-dip-recipe/"
      },
      influencer: {
        name: "Grace Hopper",
        picture: require('./influencers/GraceHopper.jpg'),
        alt: "Grace Hopper",
      },
      bio: {
        bio: 'Grace Brewster Murray Hopper (née Murray December 9, 1906 – January 1, 1992) was an American computer scientist and United States Navy rear admiral.One of the first programmers of the Harvard Mark I computer, she was a pioneer of computer programming who invented one of the first compiler related tools. She popularized the idea of machine-independent programming languages, which led to the development of COBOL, an early high-level programming language still in use today. She always dreamed of a programming language written in English.',
        url: 'https://en.wikipedia.org/wiki/Grace_Hopper'
      }
    },
    {
      id: 'tuesday',
      fitness: {
        picture: require('./fitness/plank.jpg'),
        alt: "plank",
        url:'https://www.livestrong.com/article/145556-exercises-to-improve-push-ups/'
      },
      quote: {
        quote: "I think that life is difficult. People have challenges. Family members get sick, people get older, you don't always get the job or the promotion that you want. You have conflicts in your life. And really, life is about your resilience and your ability to go through your life and all of the ups and downs with a positive attitude. ",
        quoter: "Jennifer Hyman"
      },
      food: {
        name: "Caprese Avocado Toast",
        picture: require('./food/avocadotoast.jpg'),
        alt: "Caprese Avocado Toast",
        url: "https://www.delish.com/cooking/recipe-ideas/recipes/a53555/greek-avocado-toast-recipe/"
      },
      influencer: {
        name:'Ellen Ullman',
        picture: require('./influencers/UllmanEllen.jpg'),
        alt: "Ellen Ullman",
      },
      bio: {
        bio: `Ellen Ullman is an American computer programmer and author. She has written novels as well as articles for various publications, including Harper's Magazine, Wired, The New York Times and Salon.
        She owned a consulting firm and worked as technology commentator for NPR's All Things Considered. Her essays and novels analyze the human side of the world of computer programming. Her breakthrough book was non-fiction: Close to the Machine: Technophilia and its Discontents.`,
        url: 'https://en.wikipedia.org/wiki/Ellen_Ullman'
      }
    },
    {
      id: 'wednesday',
      fitness: {
        picture: require('./fitness/push-up.jpg'),
        alt: "push-up",
        url:'https://www.stylecraze.com/articles/sit-up-exercises-and-their-benefits/#gref'
      },
      quote: {
        quote: "Successful people maintain a positive focus in life no matter what is going on around them. They stay focused on their past successes rather than their past failures, and on the next action steps they need to take to get them closer to the fulfillment of their goals rather than all the other distractions that life presents to them. ",
        quoter: 'Jack Canfield'
      },
      food: {
        name: "Donut Apples",
        picture: require('./food/donutapples.jpg'),
        alt: "Donut Apples",
        url: "https://www.delish.com/cooking/recipe-ideas/recipes/a52053/donut-apples-recipe/"
      },
      influencer: {
        name: "Sheryl Sandberg",
        picture: require('./influencers/SherylSandberg.jpg'),
        alt: "Sheryl Sandberg",
      },
      bio: {
        bio: `Sheryl Kara Sandberg (born August 28, 1969)is an American technology executive, activist, author, and billionaire. She is the chief operating officer (COO) of Facebook and founder of Leanin.org. In June 2012, she was elected to Facebook's board of directors by the existing board members,[5] becoming the first woman to serve on its board. Before she joined Facebook as its COO, Sandberg was vice president of global online sales and operations at Google, and was involved in launching Google's philanthropic arm Google.org. Before Google, Sandberg served as chief of staff for United States Secretary of the Treasury Lawrence Summers.`,
        url: 'https://en.wikipedia.org/wiki/Sheryl_Sandberg'
      }
    },
    {
      id: 'thursday',
      fitness: {
        picture: require('./fitness/sit-up.jpg'),
        alt: "sit-up",
        url:'https://www.nhs.uk/live-well/exercise/10-minute-home-cardio-workout/'
      },
      quote: {
        quote: "Your attitude is like a box of crayons that color your world. Constantly color your picture gray, and your picture will always be bleak. Try adding some bright colors to the picture by including humor, and your picture begins to lighten up.",
        quoter: 'Allen Klein'
      },
      food: {
        name: "Cucumber Sushi",
        picture: require('./food/cucumbersushi.jpeg'),
        alt: "Cucumber Sushi",
        url: "https://www.delish.com/cooking/recipe-ideas/recipes/a58629/cucumber-sushi-recipe/"
      },
      influencer: {
        name: "Ada Lovelace",
        picture: require('./influencers/AdaLovelace.jpg'),
        alt: "Ada Lovelace",
      },
      bio: {
        bio: `Augusta Ada King, Countess of Lovelace (née Byron; 10 December 1815 – 27 November 1852) was an English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine. She was the first to recognise that the machine had applications beyond pure calculation, and published the first algorithm intended to be carried out by such a machine. As a result, she is sometimes regarded as the first to recognise the full potential of a "computing machine" and the first computer programmer.`,
        url: 'https://en.wikipedia.org/wiki/Ada_Lovelace'
      }
    },
    {
      id: 'friday',
      fitness: {
        picture: require('./fitness/pullAparts.jpg'),
        alt: "squats",
        url:'https://www.telegraph.co.uk/health-fitness/body/10-essential-yoga-poses-beginners/'
      },
      quote: {
        quote: "I realized that if my thoughts immediately affect my body, I should be careful about what I think. Now if I get angry, I ask myself why I feel that way. If I can find the source of my anger, I can turn that negative energy into something positive. ",
        quoter: 'Yoko Ono'
      },
      food: {
        name: "Greek Feta Dip",
        picture: require('./food/greekfeta.jpg'),
        alt: "Greek Feta Dip",
        url: "https://www.delish.com/cooking/recipe-ideas/recipes/a50968/greek-feta-dip-recipe/"
      },
      influencer: {
        name: "Margaret Hamilton",
        picture: require('./influencers/MargaretHamilton.jpg'),
        alt: "Margaret Hamilton",
        url: "https://en.wikipedia.org/wiki/Tracy_Chou"
      },
      bio: {
        bio: `Margaret Heafield Hamilton (born August 17, 1936)is an American computer scientist, systems engineer, and business owner. She is credited with coining the term "software engineering". Hamilton was Director of the Software Engineering Division of the MIT Instrumentation Laboratory, which developed on-board flight software for the Apollo space program.[4] In 1986, she became the founder and CEO of Hamilton Technologies, Inc., in Cambridge, Massachusetts. The company was developed around the Universal Systems Language based on her paradigm of Development Before the Fact (DBTF) for systems and software design.`,
        url:'https://en.wikipedia.org/wiki/Margaret_Hamilton_%28scientist%29'
      }
    },
    {
      id: 'saturday',
      fitness: {
        picture: require('./fitness/star-jump.jpg'),
        alt: "star-jump",
        url:'https://www.nerdfitness.com/blog/strength-training-101-how-to-squat-properly/'
      },
      quote: {
        quote: "Stop saying these negative things about yourself. Look in the mirror and find something about yourself that's positive and celebrate that!",
        quoter: 'Tyra Banks'
      },
      food: {
        name: "Creamy Garlic Hummus",
        picture: require('./food/hummus.jpg'),
        alt: "Creamy Garlic Hummus",
        url: "https://www.delish.com/cooking/recipe-ideas/a20089167/best-homemade-hummus-recipe/"
      },
      influencer: {
        name: "Susan Wojcicki",
        picture: require('./influencers/SusanWojcicki.jpg'),
        alt: "Susan Wojcicki",
      },
      bio: {
        bio:  `Susan Diane Wojcicki (born July 5, 1968) is a Polish-American technology executive. She has been the CEO of YouTube since February 2014.
        Wojcicki was involved in the founding of Google, and became Google's first marketing manager in 1999. She was in charge of Google's original video service, and after observing the success of YouTube, proposed the acquisition of YouTube by Google in 2006.
        Wojcicki has an estimated net worth of nearly $500 million.`,
        url: 'https://en.wikipedia.org/wiki/Susan_Wojcicki'
      }
    },
    {
      id: 'sunday',
      fitness: {
        picture: require('./fitness/yoga.jpg'),
        alt: "yoga",
        url:'https://yurielkaim.com/push-up-variations/'
      },
      quote: {
        quote: "You are the sum total of everything you've ever seen, heard, eaten, smelled, been told, forgot - it's all there. Everything influences each of us, and because of that I try to make sure that my experiences are positive",
        quoter:'Maya Angelou'
      },
      food: {
        name: "Ricotta-Honey Toast with Berries",
        picture: require('./food/ricottahoneytoast.jpg'),
        alt: "Ricotta-Honey Toast with Berries",
        url: "https://www.delish.com/cooking/recipe-ideas/recipes/a45367/ricotta-honey-toast-with-berries-recipe/"
      },
      influencer: {
        name: "Virginia Marie",
        picture: require('./influencers/VirginiaMarie.jpg'),
        alt: "Virginia Marie",
        url: "https://en.wikipedia.org/wiki/Tracy_Chou"
      },
      bio: {
        bio: `Virginia Marie "Ginni" Rometty (born July 29, 1957)is an American business executive. She is the current chair, president, and CEO of IBM, and the first woman to head the company.Prior to becoming president and CEO in January 2012, she first joined IBM as a systems engineer in 1981 and subsequently headed global sales, marketing, and strategy.While general manager of IBM's global services division, in 2002 she helped negotiate IBM's purchase of PricewaterhouseCoopers IT consulting business, becoming known for her work integrating the two companies.Since becoming CEO, she has focused IBM on analytics, cloud computing, and cognitive computing systems.`,
        url: 'https://en.wikipedia.org/wiki/Ginni_Rometty'
      }
    },
    {
      id: 'eighth',
      fitness: {
        picture: require('./fitness/yPrones.png'),
        alt: "posture",
        url:'https://www.keepinspiring.me/10-simple-exercises-to-improve-posture/'
      },
      quote: {
        quote: "Leaders must exemplify integrity and earn the trust of their teams through their everyday actions. When you do this, you set high standards for everyone at your company. And when you do so with positive energy and enthusiasm for shared goals and purpose, you can deeply connect with your team and customers. ",
        quoter: 'Marillyn Hewson'
      },
      food: {
        name: "Zucchini Parmesan Chips",
        picture: require('./food/parmisanchips.jpg'),
        alt: "Zucchini Parmesan Chips",
        url: "https://www.delish.com/cooking/recipe-ideas/recipes/a54806/zucchini-cheesy-bread-recipe/"
      },
      influencer: {
        name: "Ruth Bader Ginsburg",
        picture: require('./influencers/RuthBaderGinsburg.jpg'),
        alt: "Ruth Bader Ginsburg",
      },
      bio: {
        bio: `Ruth Bader Ginsburg (born Joan Ruth Bader; March 15, 1933) is an Associate Justice of the Supreme Court of the United States. Ginsburg was appointed by President Bill Clinton and took the oath of office on August 10, 1993. She is the second female justice (after Sandra Day O'Connor) of four to be confirmed to the court (along with Sonia Sotomayor and Elena Kagan, who are still serving). Following O'Connor's retirement, and until Sotomayor joined the court, Ginsburg was the only female justice on the Supreme Court. During that time, Ginsburg became more forceful with her dissents, which were noted by legal observers and in popular culture. She is generally viewed as belonging to the liberal wing of the court. Ginsburg has authored notable majority opinions, including United States v. Virginia, Olmstead v. L.C., and Friends of the Earth, Inc. v. Laidlaw Environmental Services, Inc.`,
        url: 'https://en.wikipedia.org/wiki/Ruth_Bader_Ginsburg'
      }
    }
  ]
}