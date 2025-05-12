//counters
const ClickCounter = document.getElementById("clickcounter")
const UprgradeCounter = document.getElementById("upgradecounter")
const UpgradeCostText = document.getElementById("upgradecost")

// buttons
const ClickButton = document.getElementById("clickbutton")
const UpgradeButton = document.getElementById("upgradebutton")

// stats
let Mulitplier = 1
let Clicks = 0
let UpgradeCost = 15

// functions
function AddClick(){
    const AddAmount = 1 * Mulitplier

    Clicks = Clicks += AddAmount
    ClickCounter.innerHTML = "Clicks: ".concat(Clicks)
}

function ChangeClicks(amount, SecretCode){
    if (SecretCode === "GoldFish"){
        console.log("Correct Code Changing Clicks By ".concat(amount))
        Clicks = Clicks + amount
        ClickCounter.innerHTML = "Clicks: ".concat(Clicks)
    }else{
        console.log("Wrong Code Not Changing Clicks. Stop Trying To Hack!")
    }
}

function Upgrade(){
    if (Clicks >= UpgradeCost) {
        const UpgradeFormula = Math.floor(UpgradeCost*2.5)

        ChangeClicks(-UpgradeCost, "GoldFish")
        UpgradeCost = UpgradeFormula
        Mulitplier = Mulitplier + 1
        UprgradeCounter.innerHTML = "Mulitplier: ".concat(Mulitplier)
        UpgradeCostText.innerHTML = "Cost: ".concat(UpgradeCost)
        ClickCounter.innerHTML = "Clicks: ".concat(Clicks)
    }
}

ClickButton.addEventListener("click", AddClick)
UpgradeButton.addEventListener("click", Upgrade)