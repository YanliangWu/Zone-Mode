# Zoom-Mode
A chrome extension to filter and redirect some websites that could distract you during works. 

It was a side project I made long time ago and I just decided to resume the development of this idea! (Because I really need this..)  

Since I have very limited front-end & web dev experiences, it could contains lots of bad pracices within my code base. It will be greatly appriciated if you notice something bad and feel free to send out PR or issues. 

## What does Zone-Mode mean? 
See explaination [here](https://www.urbandictionary.com/define.php?term=In%20The%20Zone)

![Alt Text](https://s3.amazonaws.com/tbbtforum/monthly_2017_05/a_41.gif.82860338ed5c58378c79a37763c337f5.gif
)

## Update Note
* 2019.03.12 Some minor fixes, bumping version up to 1.0. Basic feature should be usable.  
* 2019.03.11 Major Refactors.

## Start-up Guide
To Install:  
1. Download and unzip this package, or clone this git repo.
2. open chrome://extensions and click "Load Unpacked Extension.."  
3. Locate to the folder and click open

## Testing
### Unit test
Unit test is unavailable at the moment, all test done manually, will consider adding unit testing in the future version.

### Automation tests
Automation test is unavailable as well as I don't think it's needed right now.

## Product Backlog
* Add some metrics to demonstrate blocking service. 
    * Activation time per day metrics
    * Redirection trigger metric
* More popup confirmation before making changes like
    * Remove keywords
    * Set Redirections URL
* Data Reset Button
* Add [Tooltips](https://getbootstrap.com/docs/4.1/components/tooltips/) for icons
* Localize remote icon so that we don't have to pull google libraries
* UI Redesign with fully bootstrap migration, current UI looks pretty bad..
    * Potentially try out other frameworks like React? (Could be too heavy for chrome extension)
* Create new page for metric visulization. Potentially using [chartJS](https://www.chartjs.org/)
* Skin customizations?
* Add default redirection page
* Fix some style inconsistency

## Credits
### Stuff that I used
* jQuery
* Bootstrap
* Also did a shameless steal from [TutorialRepublic](https://www.tutorialrepublic.com/snippets/preview.php?topic=bootstrap&file=table-with-add-and-delete-row-feature
)