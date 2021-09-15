const value = 3;

switch (value)
{
    case 1:
        console.log("First case");
        break;

    case 2:
        console.log("Second case");
        break;

    case 3:
    case 4:
    case 5:
        console.log("Third, Fourth or Fifth case");
        break;

    default:
        console.log("None of the above");
        break;
}