import { LightningElement, wire, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class RedirectViewAll extends NavigationMixin(LightningElement) {
    @api recordId;
    handleListViewNavigation() {
        // Navigate to the Accounts object's Recent list view.

        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
                recordId: this.recordId,
                objectApiName: 'Account',
                relationshipApiName: 'Master_Datas__r',
                actionName: 'view'
            }
        });
    }

    handleListViewNavigationFilter() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://tcb-1d-dev-ed.develop.lightning.force.com/lightning/cmp/force__dynamicRelatedListViewAll?force__flexipageId=Account_Record_Page1&force__cmpId=lst_dynamicRelatedList&force__recordId=' + this.recordId
            }
        });
    }
}