export default function position(entityOrPosition) {
    if (entityOrPosition instanceof pc.Vec3) return entityOrPosition
    if (entityOrPosition.entity) entityOrPosition = entityOrPosition.entity
    return entityOrPosition.getPosition()
}
