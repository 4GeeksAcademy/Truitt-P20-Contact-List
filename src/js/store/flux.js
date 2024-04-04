const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
             contacts: []
        },
        actions: {

// Get all Contacts
           fetchAllContacts: () => {
                fetch ("https://playground.4geeks.com/contact/agendas/truitt/contacts")
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setStore({contacts: data.contacts})
                })
           },


// Create 1 New Contact
			saveContact: async (newContact) => {
				const store = getStore();
				const newContacts = [...store.contacts, newContact]
				
				try {
					await fetch('https://playground.4geeks.com/contact/agendas/truitt/contacts', {
						method: 'POST',
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(newContact)
					})
				} catch(e) {
					console.log('Failed to add new contact')
				}

                setStore({ contacts: newContacts });
			},

// Delete 1 Contact
            fetchDeleteOneContact: id => {
                let options = {
                    method: "DELETE",
                    body: JSON.stringify(id),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
                fetch('https://playground.4geeks.com/contact/agendas/truitt/contacts/' + id, options)
                .then(res => {
                    if (!res.ok) throw Error(res.statusText);
                    return res;
                })
                .then((data)=>{
                    console.log(data);
                    getActions().fetchAllContacts()
                })
                .then(res => console.log("Successfully deleted", res))
            },
        }
}
}

export default getState;
