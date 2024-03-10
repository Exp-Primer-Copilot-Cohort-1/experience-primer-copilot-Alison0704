function skillsMember() {
  return {
    name: 'skillsMember',
    type: 'MemberExpression',
    message: 'Use the `skills` object to access the `skills` property of `this`.',
    test: function(node, path, state) {
      return node.object.type === 'ThisExpression' && node.property.name === 'skills';
    }
  };
}