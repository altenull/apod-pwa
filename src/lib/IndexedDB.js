function IndexedDB() {
  const defaultDBName = 'apodDB';
  const defaultStoreName = 'apodStore';
  const that = {};
  let db = null;

  const init = () => {
    const promise = new Promise((resolve, reject) => {
      // This works on all devices/browsers, and uses IndexedDBShim as a final fallback
      const indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
      const open = indexedDB.open(defaultDBName, 1);

      open.onupgradeneeded = () => {
        db = open.result;
        db.createObjectStore(defaultStoreName, { keypath: 'date' });
      };

      open.onsuccess = () => {
        db = open.result;
        resolve(true);
      };
    });
    return promise;
  };

  const addAPOD = (apod) => {
    const promise = new Promise((resolve, reject) => {
      const tx = db.transaction([defaultStoreName], 'readwrite');
      const store = tx.objectStore(defaultStoreName);

      // @Params (object, key)
      store.add(apod, apod.date).onsuccess = (event) => {
        resolve(event.target.result);
      }
    });
    return promise;
  };

  const removeAPOD = (date) => {
    const promise = new Promise((resolve, reject) => {
      const tx = db.transaction([defaultStoreName], 'readwrite');
      const store = tx.objectStore(defaultStoreName);
      
      store.delete(date).onsuccess = (event) => {
        resolve(event.target.result);
      }
    });
    return promise;
  }

  const getAllAPODs = () => {
    const promise = new Promise((resolve, reject) => {
      const tx = db.transaction([defaultStoreName], 'readonly');
      const store = tx.objectStore(defaultStoreName);
      let findResult = [];

      store.openCursor().onsuccess = (event) => {
        const cursor = event.target.result;

        if (cursor) {
          findResult.push(cursor.value);
          cursor.continue();
        } else {
          resolve(findResult);
        }
      };
    });
    return promise;
  };

  const removeAllAPODs = () => {
    const promise = new Promise((resolve, reject) => {
      const tx = db.transaction([defaultStoreName], 'readwrite');
      const store = tx.objectStore(defaultStoreName);
      store.clear();
    });
    return promise;
  }

  const close = () => {
    db.close();
  };

  that.init = init;
  that.close = close;
  that.addAPOD = addAPOD;
  that.removeAPOD = removeAPOD;
  that.getAllAPODs = getAllAPODs;
  that.removeAllAPODs = removeAllAPODs;
  return that;
}

export default IndexedDB();