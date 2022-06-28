const day = new Date().getDay();

switch(day) {
    case 0:
        console.log("The best day in the week!!! Sunday!");
        break;
    case 1:
        console.log("Let's start the day with a good coffee! Happy Monday!");
        break;
    case 2:
        console.log("Thursday! The day after Monday.");
        break;
    case 3:
        console.log("Middle of the week eh? Have a good Wednesday!!");
        break;
    case 4:
        console.log("Idk I find tuesdays are boring ¯\\_(ツ)_/¯");
        break;
    case 5:
        console.log("Happy Friday!!!!!!!!!!!!!");
        break;
    case 6:
        console.log("I like Saturdays.... ;)");
        break;
    default:
        console.log("Something went wrong man :|");
        break;
};