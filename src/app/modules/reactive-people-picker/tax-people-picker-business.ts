import {SharepointListsWebService,UserInfoListEntry,SharepointListItem} from 'ng-tax-share-point-web-services-module';

export class TaxPeoplePickerBusiness{

	constructor(private sharepointListsWebService: SharepointListsWebService) {
	}

	//Will search for an item that contains the provided term in either the display name ,the 
	// email or the Account Number. It is case insensitive search!!! What else could you ask for!! ? ?
	searchForPeople(term:string): Promise<SharepointListItem[]>{
		if(term){
			let trimmedTerm = term.trim();
			if(trimmedTerm.length>1){			
				if(trimmedTerm){
					return this.sharepointListsWebService.getListItems(UserInfoListEntry, null ,
						"<Query><OrderBy><FieldRef Name ='Title'/></OrderBy><Where><And><Eq><FieldRef Name='ContentType' />"+
						"<Value Type='Text'>Person</Value></Eq><Or><Or><Contains><FieldRef Name='EMail' /><Value Type='Text'>"+
						trimmedTerm+"</Value></Contains><Contains><FieldRef Name='Title' /><Value Type='Text'>"+
						trimmedTerm+"</Value></Contains></Or><Contains><FieldRef Name='Name' /><Value Type='Text'>"+
						trimmedTerm+"</Value></Contains></Or></And></Where></Query>", null);
				}
			}
		}
		
		//if any of the condition were false, return empty array.
		return Promise.resolve([]);
	}

}