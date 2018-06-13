class CMS_Article {
  constructor(
    id,
    create_date,
    last_update,
    channel_id,
    content,
    title,
    title_key,
    user_id,
    viewcount,
    description
  ) {
    this.id = id;
    this.create_date = create_date;
    this.last_update = last_update;
    this.channel_id = channel_id;
    this.content = content;
    this.title = title;
    this.title_key = title_key;
    this.user_id = user_id;
    this.viewcount = viewcount;
    this.description = description;
  }
}
module.exports = CMS_Article;
