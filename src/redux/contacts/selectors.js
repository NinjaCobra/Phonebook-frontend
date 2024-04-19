import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter.value;


export const selectVisibleContacts = createSelector([selectFilter, selectContacts], (filter, contacts)=> {
    if(filter){
        const lowerCaseFilter = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(lowerCaseFilter))
      } else {
        return contacts;
      }
});