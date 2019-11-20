# FriendFinder

### Feeling lonely? I've got just the thing for you.

## Live Site
 - https://sleepy-river-44511.herokuapp.com/

 ## Usage
 ![Screen Shot 2019-10-09 at 8 22 19 PM](https://user-images.githubusercontent.com/51130585/69213328-bf5bf800-0b31-11ea-808e-c48dbacfbc35.png)

 To use the FriendFinder, all you have to do is go to the homepage and fill out a simple survey. FriendFinder will match you with a new best friend! You can also access the Friends API (for purely research-orientated purposes, obviously.)

 ## Technology Used

- JavaScript
- jQuery
- node.js
- Express.js
- HTML
- Bootstrap

 This app uses the `express` and `path` npm packages in the `server.js` file.
 There are two separate JS files for routing (`htmlRoutes.js` and `apiRoutes.js`).
 Friend data is stored in the `friends.js` file.

 ## How it works

 FriendFinder has two html files that serve as the main pages for the app (`home.html` and `survey.html`). The home page simply offers the user the option to take the survey. The survey pages displays both the survey, and later, the resulting best friend.

 The best friend is calculated by comparing the absolute value of the user's input in the survey to the answers of the friends to the same questions. The friend whose scores have the most minimal difference will match as the user's new best friend.

 The new best friend is then sent back to the browser as a JSON object and rendered onto the page in a modal.

 Friends are stored like this:

 ```js
{
	name: "Sid H",
	photo: "https://user-images.githubusercontent.com/52713263/66530107-5d40b980-ead4-11e9-80a1-2f3a91ed02a8.png",
	scores: [5, 1, 2, 3, 1, 2, 5, 1, 1, 1]
}
```
