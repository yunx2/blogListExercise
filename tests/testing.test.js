const listHelper = require('../utils/listHelper');

// @ts-ignore
test('dummy returns 1', () => {
  const blogs = [];
  const result = listHelper.dummy(blogs);
  // @ts-ignore
  expect(result).toBe(1);
});

  const blogs1= [];
  const blogs2 = [{
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  }];
  const blogs3 = [ { 
    _id: "5a422a851b54a676234d17f7", title: "React patterns", author: "Michael Chan", url: "https://reactpatterns.com/", likes: 7, __v: 0 
  }, { 
    _id: "5a422aa71b54a676234d17f8", title: "Go To Statement Considered Harmful", author: "Edsger W. Dijkstra", url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html", likes: 5, __v: 0 
  }, { 
    _id: "5a422b3a1b54a676234d17f9", title: "Canonical string reduction", author: "Edsger W. Dijkstra", url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html", likes: 12, __v: 0 
  }, {
    _id: "5a422b891b54a676234d17fa", title: "First class tests", author: "Robert C. Martin", url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll", likes: 10, __v: 0 
  }, { 
    _id: "5a422ba71b54a676234d17fb", title: "TDD harms architecture", author: "Robert C. Martin", url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html", likes: 0, __v: 0 
  }, { 
    _id: "5a422bc61b54a676234d17fc", title: "Type wars", author: "Robert C. Martin", url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html", likes: 2, __v: 0 
  }
];

// @ts-ignore
describe('totalLikes', () => {
  
  // @ts-ignore
  test('empty array is zero', () => {
    // @ts-ignore
    expect(listHelper.totalLikes(blogs1)).toBe(0);
  });
  // @ts-ignore
  test('array of one blog is that blog\'s number of likes', () => {
    // @ts-ignore
    expect(listHelper.totalLikes(blogs2)).toBe(5);
  });
  // @ts-ignore
  test('correctly sums the likes of a longer array', () => {
    // @ts-ignore
    expect(listHelper.totalLikes(blogs3)).toBe(36);
  });
});

describe('favoriteBlog', () => {

  test('if given an empty array, returns 0', () => {
    expect(listHelper.favoriteBlog(blogs1)).toBe(0);
  });
  test('if given an array with one blog, it will return that blog', () => {
    expect(listHelper.favoriteBlog(blogs2)).toEqual(blogs2[0]);
  });
  test('given an array of many blogs, will return the array element with the greatest number of likes', () => {
    expect(listHelper.favoriteBlog(blogs3)).toEqual(blogs3[2]);
  });
});