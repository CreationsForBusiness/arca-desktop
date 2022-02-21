import { withDB } from "react-pouchdb";

const withDatabase = Component => name => {
  return withDB(name, ({ db, ...props }) => {
    db.record = (name) => db.get('info')
      .catch((err) => {
        const { status } = err;
        if(status === 404) 
          return {}
        throw err
      })

    return (
      <Component 
        db={db}
        {...props}
      />
    )
  })
}

export default withDatabase