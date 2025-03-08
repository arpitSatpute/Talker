import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const ListUsers = () => {
  // Sample user data - replace with your actual data
  const users = [
    { id: 1, name: 'Sarah Johnson', status: 'online', avatar: 'S' },
    { id: 2, name: 'Michael Chen', status: 'online', avatar: 'M' },
    { id: 3, name: 'Alex Rodriguez', status: 'away', avatar: 'A' },
    { id: 4, name: 'Emma Williams', status: 'offline', avatar: 'E' },
    { id: 5, name: 'David Kim', status: 'online', avatar: 'D' },
    { id: 6, name: 'Aisha Patel', status: 'online', avatar: 'A' },
    { id: 7, name: 'Carlos Mendez', status: 'offline', avatar: 'C' },
    { id: 8, name: 'Grace Liu', status: 'away', avatar: 'G' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return '#4CAF50';
      case 'away': return '#FFC107';
      case 'offline': return '#9E9E9E';
      default: return '#9E9E9E';
    }
  };

  const getRandomColor = (letter) => {
    const colors = ['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50'];
    return colors[letter.charCodeAt(0) % colors.length];
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Talker</Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="user-plus" size={22} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="search" size={22} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="more-vertical" size={22} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Users List */}
      <View style={styles.listContainer}>
        <Text style={styles.sectionTitle}>Connected Users</Text>
        <ScrollView style={styles.userList} showsVerticalScrollIndicator={false}>
          {users.map(user => (
            <TouchableOpacity key={user.id} style={styles.userCard}>
              <View style={[styles.avatarContainer, { backgroundColor: getRandomColor(user.avatar) }]}>
                <Text style={styles.avatarText}>{user.avatar}</Text>
                <View 
                  style={[
                    styles.statusIndicator, 
                    { backgroundColor: getStatusColor(user.status) }
                  ]} 
                />
              </View>
              <View style={styles.userInfo}>
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.userStatus}>{user.status}</Text>
              </View>
              <TouchableOpacity style={styles.chatButton}>
                <Icon name="message-circle" size={20} color="#4A6572" />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#4A6572',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headerButtons: {
    flexDirection: 'row',
    gap: 16,
  },
  iconButton: {
    padding: 4,
  },
  listContainer: {
    flex: 1,
    marginTop: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#344955',
    marginBottom: 12,
  },
  userList: {
    flex: 1,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  statusIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#344955',
  },
  userStatus: {
    fontSize: 14,
    color: '#78909C',
    marginTop: 4,
    textTransform: 'capitalize',
  },
  chatButton: {
    backgroundColor: '#E1E8ED',
    borderRadius: 20,
    padding: 8,
  },
});

export default ListUsers;