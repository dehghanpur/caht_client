export default async function(context) {
  if(context.store.state.community.community ===''){
    context.redirect('/');
  }
}
