



const Modal = () => {

  let closeButton = null

  const submitModal = () => {
    alert('Submitting Modal')
    closeButton.click()
  }

  return (
    <div>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Create Movie
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Lord of the Rings" />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text" className="form-control" id="description" placeholder="Somewhere in Middle-earth..." />
              </div>
              <div className="form-group">
                <label htmlFor="description">Rating</label>
                <input type="number" max="5" min="0" className="form-control" id="rating" placeholder="3" />
                <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
              </div>
              <div className="form-group">
                <label htmlFor="image">Image</label>
                <input type="text" className="form-control" id="image" placeholder="http://....." />
              </div>
              <div className="form-group">
                <label htmlFor="cover">Cover</label>
                <input type="text" className="form-control" id="cover" placeholder="http://......" />
              </div>
              <div className="form-group">
                <label htmlFor="longDesc">Long Description</label>
                <textarea className="form-control" id="longDesc" rows="3"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="genre">Genre</label>
                <select multiple className="form-control" id="genre">
                  <option>drama</option>
                  <option>music</option>
                  <option>adventure</option>
                  <option>historical</option>
                  <option>action</option>
                </select>
              </div>
            </form>
            </div>
            <div className="modal-footer">
              <button ref={ele => closeButton = ele} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button onClick={submitModal} type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal