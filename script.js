function firstWord(s) {
  // your code here
	str = s.trim();
    let spaceIndex = str.indexOf(' ');

    // If no space is found, return the whole string
    return spaceIndex === -1 ? str : str.substring(0, spaceIndex);
}
}

Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
