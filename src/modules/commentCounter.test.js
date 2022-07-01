import CommentsSectionView from '../views/view-components/details-popup/comments-section/CommentsSectionView.js';

const BASE_COMMENTS_COUNT_TEXT = 'Comments';
let commentsSectionView;

describe('CommentsSection.genCommentsCountText() Method', () => {
  beforeEach(() => {
    const arr2 = [
        { creation_date: '2022-06-23', username: 'Ahmad', comment: 'I need more' },
        {
          creation_date: '2022-06-24',
          username: 'Hussain',
          comment: 'So excited to taste it',
        },
        { creation_date: '2022-06-24', username: 'amir', comment: 'food with style' },
        { username: 'Fazal', comment: 'good beef', creation_date: '2022-06-24' },
        { username: 'mishal', creation_date: '2022-06-24', comment: 'deer yummy da' },
        { creation_date: '2022-06-24', username: 'Ceser', comment: 'i am hungry' },
      ];    
  });

  it('should be able to display the right number of comments', () => {
    const commentsList = [
      { item_id: 1, username: 'user 1', comment: 'comment 1' },
      { item_id: 2, username: 'user 2', comment: 'comment 2' },
      { item_id: 3, username: 'user 3', comment: 'comment 3' },
    ];
    const commentsCountText = commentsSectionView.genCommentsCountText(commentsList);

    expect(commentsCountText).toBe(`${commentsList.length} ${BASE_COMMENTS_COUNT_TEXT}`);
  });

  it('should be able to display a message when there are NO comments', () => {
    const commentsList = [];
    const commentsCountText = commentsSectionView.genCommentsCountText(commentsList);

    expect(commentsCountText).toBe('No Comments');
  });
});





function countNumberOfComments(arr) {
    return arr.length;
  }
  
  const arr = [
    {
      comment: 'I like this food',
      creation_date: '2022-06-23',
      username: 'waqas',
    },
    {
      username: 'waqas',
      comment: 'I like this food',
      creation_date: '2022-06-23',
    },
  ];
  test('check the value if it is 2', () => {
    expect(countNumberOfComments(arr)).toBe(2);
  });
  
  const arr2 = [
    { creation_date: '2022-06-23', username: 'Ahmad', comment: 'I need more' },
    {
      creation_date: '2022-06-24',
      username: 'Hussain',
      comment: 'So excited to taste it',
    },
    { creation_date: '2022-06-24', username: 'amir', comment: 'food with style' },
    { username: 'Fazal', comment: 'good beef', creation_date: '2022-06-24' },
    { username: 'mishal', creation_date: '2022-06-24', comment: 'deer yummy da' },
    { creation_date: '2022-06-24', username: 'Ceser', comment: 'i am hungry' },
  ];
  
  test('check the value if it is 6', () => {
    expect(countNumberOfComments(arr2)).toBe(6);
  });
  
  const a = 1;
  const b = 2;
  if (a > b) {
    countComment();
  }