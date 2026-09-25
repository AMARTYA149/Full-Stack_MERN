import request from "supertest";
import app from "../../src/app";

describe("POST /auth/register", () => {
    describe("Given all fields", () => {
        it("should return 201 status code", async () => {
            // AAA
            // Arrange
            const userData = {
                firstName: "Amartya",
                lastName: "Aishwarya",
                email: "amartya@mern.space",
                password: "secret",
            };
            // Act
            const response = await request(app)
                .post("/auth/register")
                .send(userData);
            // Assert
            expect(response.statusCode).toBe(201);
        });

        it("should return valid JSON", async () => {
            // AAA
            // Arrange
            const userData = {
                firstName: "Amartya",
                lastName: "Aishwarya",
                email: "amartya@mern.space",
                password: "secret",
            };
            // Act
            const response = await request(app)
                .post("/auth/register")
                .send(userData);

            // Assert application/json utf-8
            expect(
                (response.headers as Record<string, string>)["content-type"],
            ).toEqual(expect.stringContaining("json"));
        });

        it("should persist the user in the database", async () => {
            // Arrange
            const userData = {
                firstName: "Amartya",
                lastName: "Aishwarya",
                email: "amartya@mern.space",
                password: "secret",
            };
            // Act
            await request(app).post("/auth/register").send(userData);
        });
    });

    describe("Fields are missing", () => {});
});
