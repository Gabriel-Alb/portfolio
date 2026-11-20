const TAU = Math.PI * 2;
const STEPS = 1024;
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

export function createOrbitGeometry(width, height, availableCards) {
  const count = Math.min(
    availableCards,
    width < 530 ? 7 : width < 760 ? 8 : width < 1080 ? 10 : 12,
  );
  let size = clamp(Math.min(width * 0.105, height * 0.175, 118), 56, 118);
  if (width < 530) size = clamp(width * 0.175, 50, 69);

  const rx = Math.max(
    55,
    Math.min(width * 0.382, width / 2 - size * 0.82 - 14),
  );
  const ry = Math.max(
    70,
    Math.min(height * 0.27, height / 2 - size * 0.8 - 25),
  );
  const depth =
    width < 530 ? 110 : width < 760 ? 140 : width < 1080 ? 170 : 215;

  function atAngle(angle) {
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);
    const perspective = 1500 / (1500 - sin * depth);
    return {
      x: cos * rx * perspective,
      y: sin * ry * perspective,
      near: (sin + 1) / 2,
      perspective,
      sin,
      cos,
    };
  }

  const distances = new Float64Array(STEPS + 1);
  let previous = atAngle(0);

  for (let i = 1; i <= STEPS; i++) {
    const point = atAngle((i * TAU) / STEPS);
    distances[i] =
      distances[i - 1] + Math.hypot(point.x - previous.x, point.y - previous.y);
    previous = point;
  }

  const length = distances[STEPS];
  size = Math.min(size, (length / count) * 0.6);

  function atDistance(distance) {
    const normalized = ((distance % length) + length) % length;
    let low = 0;
    let high = STEPS;

    while (low + 1 < high) {
      const mid = (low + high) >> 1;
      if (distances[mid] < normalized) low = mid;
      else high = mid;
    }

    const ratio =
      (normalized - distances[low]) / (distances[high] - distances[low] || 1);
    return atAngle(((low + ratio) * TAU) / STEPS);
  }

  return { width, height, count, size, length, speed: length / 35, atDistance };
}
