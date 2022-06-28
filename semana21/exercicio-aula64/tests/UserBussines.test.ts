import { UserBusiness } from "../src/business/UserBusiness";
import { HashGeneratorMock } from "./mocks/hashGeneratorMock";
import { IdGeneratorMock } from "./mocks/idGeneratorMock";
import { TokenGeneratorMock } from "./mocks/tokenGeneratorMock";
import { UserDatabaseMock } from "./mocks/UserDatabaseMock";

const userBussinesMock = new UserBusiness(
  new IdGeneratorMock(),
  new HashGeneratorMock(),
  new TokenGeneratorMock(),
  new UserDatabaseMock() as any
);

describe("teste de signUp", () => {
  test("Erro quando o nome do usuário vier vazio", async () => {
    expect.assertions(2);

    try {
      await userBussinesMock.signup(
        "",
        "email@email.com",
        "senha123",
        "NORMAL"
      );
    } catch (error) {
      expect(error.message).toEqual("Missing input");
      expect(error.statusCode).toBe(422);
    }
  });

  test("Erro quando o email for inválido", async () => {
    expect.assertions(2);
    try {
      await userBussinesMock.signup(
        "magdiel",
        "magdiel.email.com",
        "senha123",
        "NORMAL"
      );
    } catch (error) {
      expect(error.message).toEqual("Invalid email");
      expect(error.statusCode).toBe(422);
    }
  });

  test("Erro quando a senha for inválida", async () => {
    expect.assertions(2);
    try {
      await userBussinesMock.signup(
        "magdiel",
        "magdiel@email.com",
        "123",
        "NORMAL"
      );
    } catch (error) {
      expect(error.message).toEqual("Invalid password");
      expect(error.statusCode).toBe(422);
    }
  });

  test("Erro quando o tipo do usuário tiver inválido", async () => {
    expect.assertions(2);
    try {
      await userBussinesMock.signup(
        "magdiel",
        "magdiel@email.com",
        "senha123",
        "CONVIDADO"
      );
    } catch (error) {
      expect(error.message).toEqual("Invalid user role");
      expect(error.statusCode).toBe(422);
    }
  });

  test("Sucesso ao cadastrar o usuário", async () => {
    expect.assertions(1);
    try {
      const acessToken = await userBussinesMock.signup(
        "magdiel",
        "magdiel@gmail.com",
        "senha123",
        "NORMAL"
      );
      expect(acessToken).toEqual({ accessToken: "token_mock" });
    } catch (error) {
      console.log(error);
    }
  });
});

describe("teste de login", () => {
  test("Erro quando o email não existir", async () => {
    expect.assertions(2);
    try {
      await userBussinesMock.login("email@email.com", "astrodev123");
    } catch (error) {
      expect(error.message).toEqual("Invalid credentials");
      expect(error.statusCode).toBe(401);
    }
  });

  test("Erro quando a senha estiver errada", async () => {
    expect.assertions(2);
    try {
      await userBussinesMock.login("astrodev@gmail.com", "123");
    } catch (error) {
      expect(error.message).toEqual("Invalid credentials");
      expect(error.statusCode).toBe(401);
    }
  });

  test("Sucesso ao logar o usuario", async () => {
    expect.assertions(1);
    try {
      const acessToken = await userBussinesMock.login(
        "astrodev@gmail.com",
        "astrodev123"
      );
      expect(acessToken).toEqual({ accessToken: "token_mock" });
    } catch (error) {
      console.log(error);
    }
  });
});

describe("getUserById", () => {
  // (a)
  test("Should catch error when id is not registered", async () => {
    expect.assertions(2);

    try {
      await userBussinesMock.getUserById("abc");
    } catch (error) {
      expect(error.statusCode).toBe(404);
      expect(error.message).toBe("User not found");
    }
  });

  // (b)
  test("Should return respective user when id is registered", async () => {
    expect.assertions(2);

    try {
      const getUserById = jest.fn((id: string) =>
        userBussinesMock.getUserById(id)
      );

      const result = await getUserById("id_mock_admin");

      expect(getUserById).toHaveBeenCalledWith("id_mock_admin");
      expect(result).toEqual({
        id: "id_mock_admin",
        name: "astrodev",
        email: "astrodev@gmail.com",
        role: "ADMIN",
      });
    } catch (error) {
      console.log(error.message);
    }
  });
});
