const {expect} = require('@playwright/test');

class accountOverview{
    constructor(page){
        this.page = page;
        this.accountOverviewText = "//h1[contains(text(),'Accounts Overview')]";
        this.openNewAccountLink = "//a[contains(text(),'Open New Account')]";
        this.accountOverviewLink = "//a[contains(text(),'Accounts Overview')]"
        this.transferFundsLink = "//a[contains(text(),'Transfer Funds')]";
        this.billBayLink = "//a[contains(text(),'Bill Pay')]";
        this.fundTransactionsLink = "//a[contains(text(),'Find Transactions')]";
        this.updateContactInfoLink = "//a[contains(text(),'Update Contact Info')]";
        this.requestLoadLink = "//a[contains(text(),'Request Loan')]";
        this.logOutLink = "//a[contains(text(),'Log Out')]";
        

    }
}