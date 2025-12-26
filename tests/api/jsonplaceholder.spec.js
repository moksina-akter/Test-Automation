import { test, expect } from "@playwright/test";

const BASE_URL = "https://jsonplaceholder.typicode.com";

test.describe("JSONPlaceholder API Tests", () => {
  //  GET all posts
  test("GET /posts - should return list of posts", async ({ request }) => {
    const response = await request.get(`${BASE_URL}/posts`);

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toHaveProperty("userId");
    expect(body[0]).toHaveProperty("id");
    expect(body[0]).toHaveProperty("title");
    expect(body[0]).toHaveProperty("body");
  });

  //  GET single post
  test("GET /posts/1 - should return single post", async ({ request }) => {
    const response = await request.get(`${BASE_URL}/posts/1`);

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.id).toBe(1);
    expect(body).toHaveProperty("title");
    expect(body).toHaveProperty("body");
  });

  //  POST create new post
  test("POST /posts - should create a new post", async ({ request }) => {
    const newPost = {
      title: "Playwright API Test",
      body: "This is a test post",
      userId: 1,
    };

    const response = await request.post(`${BASE_URL}/posts`, {
      data: newPost,
    });

    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.title).toBe(newPost.title);
    expect(body.body).toBe(newPost.body);
    expect(body.userId).toBe(newPost.userId);
  });

  test("GET /posts/9999 - should return 404", async ({ request }) => {
    const response = await request.get(`${BASE_URL}/posts/9999`);
    expect(response.status()).toBe(404);
  });
});
