function firstWord(s) {
    // Trim leading and trailing spaces
    s = s.trim();
    let spaceIndex = s.indexOf(' ');

    // If no space is found, return the whole string
    return spaceIndex === -1 ? s : s.substring(0, spaceIndex);
}
}

Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
