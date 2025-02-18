import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface Props {
  studentsCount: number;
  searchQuery: string;
  onSearch: (query: string) => void;
  onSortToggle: () => void;
  sortBy: string;
  onNewStudentPress: () => void;
}

export default function StudentListHeader({
  studentsCount,
  searchQuery,
  onSearch,
  onSortToggle,
  sortBy,
  onNewStudentPress,
}: Props) {

  const router = useRouter();

  return (
    <>
      <View style={styles.summary}>
        <Ionicons name="people-circle-outline" size={60} color="#6FCF97" />
        <View style={styles.summaryText}>
          <Text style={styles.totalLabel}>Total de Alunos</Text>
          <Text style={styles.totalNumber}>{studentsCount}</Text>
        </View>
        <TouchableOpacity style={styles.newStudentButton} onPress={onNewStudentPress}>
          <Text style={styles.newStudentButtonText}>Novo Aluno</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={20} color="#666" />
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquise um aluno"
            placeholderTextColor="#A0A0A0"
            value={searchQuery}
            onChangeText={onSearch}
          />
        </View>
        <TouchableOpacity style={styles.sortButton} onPress={onSortToggle}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.sortButtonText}>
            Ordenar: {sortBy === 'alfabetica' ? 'Alfabética' : 'Turma'}
          </Text>
          <Ionicons name="chevron-down-outline" size={16} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.tableHeader}>
        <Text style={[styles.tableHeaderText, styles.headerName]}>Aluno</Text>
        <Text style={[styles.tableHeaderText, styles.headerGrade]}>Turma</Text>
        <Text style={[styles.tableHeaderText, styles.headerScore]}>Acertos</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 55,
    marginBottom: 20,
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20
  },
  summaryText: {
    marginLeft: 15,
  },
  totalLabel: {
    fontSize: 14,
    color: '#666',
  },
  totalNumber: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  newStudentButton: {
    backgroundColor: '#6FCF97',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginLeft: 'auto',
  },
  newStudentButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    width: '50%',
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
    fontSize: 16,
  },
  sortButton: {
    flexDirection: 'row',
  },
  sortButtonText: {
    fontSize: 14,
    color: '#333',
    marginRight: 4,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  tableHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
  },
  headerName: {
    width: '40%',
  },
  headerGrade: {
    width: '30%',
    textAlign: 'center',
  },
  headerScore: {
    width: '30%',
    textAlign: 'center',
  },
});
