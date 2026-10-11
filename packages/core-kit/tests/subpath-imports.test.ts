import { describe, expect, test } from "bun:test";

describe("package subpaths", () => {
  test("loads root and subpath exports", async () => {
    const root = await import("@hirkan/core-kit");
    const xray = await import("@hirkan/core-kit/xray");
    const xrayGenerators = await import("@hirkan/core-kit/xray/generators");
    const wireguard = await import("@hirkan/core-kit/wireguard");

    expect(typeof root.createCoreConfigTemplate).toBe("function");
    expect(typeof xray.validateStrictXrayConfig).toBe("function");
    expect(typeof xrayGenerators.createDefaultXrayCoreConfigJson).toBe("function");
    expect(typeof wireguard.generateWireGuardKeyPair).toBe("function");
  });
});

