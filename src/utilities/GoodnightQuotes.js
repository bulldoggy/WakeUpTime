import Utils from "../utilities/Utils";

class GoodnightQuotes {
    static quotes = [
        "“Love you yesterday, love you still, always have, always will.” – Elaine Davis", 
        "“I have loved the stars too fondly to be fearful of the night.” – Sarah Williams", 
        "“Listen to the night sky; the mockingbird always sings you my lullaby.” – Jmemo", 
        "“Good night, good night! Parting is such sweet sorrow, that I shall say good night till it be morrow.” – William Shakespeare", 
        "“The night is more alive and more richly colored than the day.” - Vincent van Gogh", 
        "“Sleep is the best meditation.” - Dalai Lama", 
        "“It was the possibility of darkness that made the day seem so bright.” - Stephen King", 
        "“Good night, and good luck.” - Edward R. Murrow", 
        "“Goodnight, goodnight, goodnight, What more is there to say than goodnight? - Jimmy Durante", 
        "“There is a time for many words, and there is also a time for sleep.“ - Homer", 
        "“Happiness consists of getting enough sleep. Just that, nothing more.” — Robert A. Heinlein, Starship Troopers", 
        "“The best bridge between despair and hope is a good night’s sleep.” — E. Joseph Cossman, Entrepreneur and Author", 
        "“A well-spent day brings happy sleep.” — Leonardo da Vinci", 
        "“Your future depends on your dreams, so go to sleep.” — Mesut Barazany", 
        "“Even a soul submerged in sleep is hard at work and helps make something of the world.” — Heraclitus",
        "“If I had a flower for every time I thought of you, I could walk in my garden forever.” – Alfred Lord Tennyson", 
        "“Good night, my angel. Time to close your eyes.” – Billy Joel", 
        "“Good night. May you fall asleep in the arms of a dream so beautiful you’ll cry when you awake.” – Michael Faudet", 
        "“I love the silent hour of night, For blissful dreams may then arise, Revealing to my charmed sight What may not bless my waking eyes.” - Anne Brontë", 
        "“We love the night and its quiet; and there is no night that we love so well as that on which the moon is coffined in clouds.” - Fitz-James O'Brien", 
        "“No wonder Sleeping Beauty looked so good… she took long naps, never got old, and didn’t have to do anything but snore to get her Prince Charming.” - Olive Green", 
        "“And I start sleeping and dreaming and I think I’ll dream about you, all through the night.” - John Mayer", 
        "“After an exhausting day, it is only fair that we have a sweet sleep.“ - Unknown", 
        "“As night falls, every joy glows brighter.” - Mason Cooley", 
        "“I can’t close my eyes without you in my dreams.” – Luke Bryan", 
        "“You’ll be the last thing I think of before I fall asleep and the first thing I think of when I wake up.” – A.G. Henley", 
        "“Star Light, star bright, you are the first and last I think of tonight. Good night, my true love.” – Unknown", 
        "“I love that you are the last person I want to talk to before I go to sleep at night.” – When Harry Met Sally", 
        "“The moon is full, the night is deep, nature is alive—the only thing missing is you, next to me as we sleep.” – Nicholas Staniszewski", 
        "“Let her sleep, for when she wakes, she will shake the world.” — Napoleon Bonaparte", 
        "“I think about you constantly, whether it’s with my mind or my heart.” – Terri Guilemets", 
        "“A good laugh and a long sleep are the best cures in the doctor’s book.” - Irish Proverb", 
        "“The day is over, the night is here, know that I love you today and forever, my dear.” – Catherine Pulsifer", 
        "“You are my blue crayon—the one I never have enough of—the one I use to color my sky.” – A.R. Rasher", 
        "“I just want to say, good night, sweet prince, may flights of angels sing thee to thy rest.” - Harry Dean Stanton", 
        "“The sea will grant each man new hope, and sleep will bring dreams of home.” - Christopher Columbus", 
        "“Life always offers you a second chance. It's called tomorrow.” - Dylan Thomas", 
        "“It is a common experience that a problem difficult at night is resolved in the morning after the committee of sleep has worked on it.” - John Steinbeck", 
        "“Sunset is the opening music of the night.” - Mehmet Murat Ildan", 
        "“Each night, when I go to sleep, I die. And the next morning, when I wake up, I am reborn.” - Mahatma Gandhi", 
        "“And tonight, I’ll fall asleep with you in my heart.” – Unknown", 
        "“Go to sleep knowing that I loved you this day, and each tomorrow my love grows stronger. Good night!” – Catherine Pulsifer", 
        "“Sleep, my love, dream happy dreams. You are the only one who has ever touched my heart. It will forever be yours.” – Stephanie Meyer", 
        "“Sleep is the most innocent creature there is and a sleepless man the most guilty.” — Franz Kafka, Supreme Secrets of Success", 
        "“Man is a genius when he is dreaming.” — Akira Kurosawa, Japanese Film Director", 
        "“The day is over, it’s time for rest. Sleep well, my dear, you did your best.” – Catherine Pulsifer", 
        "“Goodnight stars, goodnight air, goodnight noises everywhere.” - Margaret Wise Brown", 
        "“I wish for you a good night of sleep, sweet dreams, and a smiling morning.” – Debasish Mridha", 
        "“Good night, slept tight, awake full of joy at the morning light.” - Theodore Higgingsworth", 
        "“This is the end of the day, but soon there will be a new day.” - Bernard Williams", 
        "“Good night now, and rest. Today was a test, You passed it, you're past it. Now breathe till unstressed.” - Lin-Manuel Miranda", 
        "“As the night gets dark, let your worries fade. Sleep peacefully knowing you’ve done all you can do for today.” - Roald Dahl", 
        "“Day is over, night has come. Today is gone, what’s done is done. Embrace your dreams, through the night. Tomorrow comes with a whole new light.” - George Orwell", 
        "“Goodnight. Let the stars light the way to where your dreams can be found awaiting your arrival.” - Anthony T. Hincks", 
        "“When I say good night to you, I am wishing you a pleasant and restful sleep. Not a night where you have to count sheep. But one that you will wake rested and fine.” – Catherine Pulsifer", 
        "“Each night, I hope the moon is large and bright and you will be happy and right. When you turn off the light, keep in mind that I am dreaming of you.” – Unknown", 
        "“Take a look out your window now. Although we may be apart at the moment we can both gaze up at the same moon. Good night.” – Sid Mohanty", 
        "“Night has come. It is time for you to sleep, my love, so we can be happy tomorrow as we usually are.” – Ambika", 
        "“Sleep well because my love is the wings to cover you and my hug and kiss are the warmth to give you pleasure. Good night, darling.” – Unknown", 
        "“Happiness is a sleeping baby.” — Unknown", 
        "“Babies smile in their sleep because they are listening to the whispers of angels.” — Unknown", 
        "“The sky grew darker, painted blue on blue, one stroke at a time, into deeper and deeper shades of night.” - Haruki Murakami", 
        "“Let gratitude be the pillow upon which you kneel to say your nightly prayer.” - Maya Angelou", 
        "“This is the ending. Now not day only shall be beloved, but night too shall be beautiful and blessed and all its fear pass away.” - J. R. R. Tolkien", 
        "“The best bridge between despair and hope is a good night's sleep.” - E. Joseph Cossman", 
        "“The moon will guide you through the night with her brightness, but she will always dwell in the darkness, in order to be seen.” - Shannon L. Adler", 
        "“Night is purer than day; it is better for thinking, loving, and dreaming. At night everything is more intense, more true. The echo of words that have been spoken during the day takes on a new and deeper meaning.” - Elie Wiesel", 
        "“Night is the wonderful opportunity to take rest, to forgive, to smile, to get ready for all the battles that you have to fight tomorrow.” - Allen Ginsberg", 
        "“The night is longer than a day for those who dream, and day is longer than night for those who make their dreams comes true.“ - Jack Kerouac", 
        "“Night is always darker before the dawn and life is the same, the hard times will pass, everything will get better and sun will shine brighter than ever.” - Ernest Hemingway", 
        "“I like the night. Without the dark, we’d never see the stars.” - Stephanie Meyer", 
        "“Dreaming permits each and every one of us to be quietly and safely insane every night of our lives.” — William Charles Dement", 
    ]

    static getRandomQuote() {
        return this.quotes[Utils.getRandomPos(this.quotes.length, 1)[0]];
    }
}

export default GoodnightQuotes;