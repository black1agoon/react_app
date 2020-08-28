const SELECT_ENTRY = 'SELECT_ENTRY'
const UPDATE_ENTRY_LIST = 'UPDATE_ENTRY_LIST'

const FETCH_ENTRY_LIST_PENDING = 'FETCH_ENTRY_LIST_PENDING'
const FETCH_ENTRY_LIST_FULLFILLED = 'FETCH_ENTRY_LIST_FULLFILLED' // SUCCEEDED
const FETCH_ENTRY_LIST_REJECTED = 'FETCH_ENTRY_LIST_REJECTED'  // FAILED

function updateEntryList(items) {
  return {
    type: UPDATE_ENTRY_LIST,
    items
  }
}

function fetchEntryList() {
  return dispatch => {
    storage.getAll().then(items => {
      dispatch(updateEntryList(items))
    })
  }
}

function selectEntry(id) {
  return {
    type: SELECT_ENTRY,
    id
  }
}